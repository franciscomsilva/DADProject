/*jshint esversion: 6 */

var app = require('http').createServer();

// Se tiverem problemas com "same-origin policy" deverão activar o CORS.

// Aqui, temos um exemplo de código que ativa o CORS (alterar o url base) 

// var app = require('http').createServer(function(req,res){
// Set CORS headers
//  res.setHeader('Access-Control-Allow-Origin', 'http://---your-base-url---');
//  res.setHeader('Access-Control-Request-Method', '*');
//  res.setHeader('Access-Control-Allow-Methods', 'UPGRADE, OPTIONS, GET');
//  res.setHeader('Access-Control-Allow-Credentials', true);
//  res.setHeader('Access-Control-Allow-Headers', req.header.origin);
//  if ( req.method === 'OPTIONS' || req.method === 'UPGRADE' ) {
//      res.writeHead(200);
//      res.end();
//      return;
//  }
// });

// NOTA: A solução correta depende da configuração do próprio servidor, 
// e alguns casos do próprio browser.
// Assim sendo, não se garante que a solução anterior funcione.
// Caso não funcione é necessário procurar/investigar soluções alternativas

var io = require('socket.io')(app);
var nodemailer = require('nodemailer');

var LoggedUsers = require('./loggedusers.js');

app.listen(8080, function(){
    console.log('listening on *:8080');
});

// ------------------------
// Estrutura dados - server
// ------------------------

// loggedUsers = the list (map) of logged users. 
// Each list element has the information about the user and the socket id
// Check loggedusers.js file

let loggedUsers = new LoggedUsers();

/*EMAIL CONFIGURATION*/
let transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: "projeto.dad.22.1920@gmail.com",
        pass: "paiRicardo4000"
    }
});

io.on('connection', function (socket) {
    console.log('client has connected (socket ID = '+socket.id+')' );

    // Emit message to the same cliente 
    //socket.emit('my_active_games_changed');

    // Handle message sent from the client to the server
    socket.on('tra', (msg) => {
        console.log(msg);
        socket.broadcast.emit('chat',msg);
     });

    socket.on('transfer-user', (id,user,amount,email) => {
        let localUser = loggedUsers.userInfoByID(id);

        if(localUser){
            user.amount = amount;
            io.to(localUser.socketID).emit('transfer',user);
            console.log(`Transfer of ${amount} from: ${user.id} to: ${id}`)
        }else{
            console.log(`User ${id} not logged in! Sending email to ${email}!`)

            /*SENDS EMAIL*/
            var message = {
                from: "virtualWallet@dad.pt",
                to: email,
                subject: "You received a transfer",
                text: user.name + " transfered you " + amount + "€.\n\n V-Wallet, your own simple Virtual Wallet"
            };
            transporter.sendMail(message);
        }
    });

    socket.on('income-user', (id,amount,email) => {
        let localUser = loggedUsers.userInfoByID(id);

        if(localUser){
            io.to(localUser.socketID).emit('income',amount);
            console.log(`Income of ${amount} to: ${id}`)
        }else{
            console.log(`User ${id} not logged in! Sending email to ${email}!`)

            /*SENDS EMAIL*/
            var message = {
                from: "virtualWallet@dad.pt",
                to: email,
                subject: "You received an income",
                text: "You received an income of " + amount + "€.\n\n V-Wallet, your own simple Virtual Wallet"
            };
            transporter.sendMail(message);
        }
    });


    socket.on('register',(user)=>{
        console.log(`Registering user: ${user.id} with sockedID: ${socket.id}`)
        loggedUsers.addUserInfo(user,socket.id)
    });

    socket.on('logout',()=>{
        console.log(`Removing user with sockedID: ${socket.id}`)
        loggedUsers.removeUserInfoBySocketID(socket.id)
    });

    socket.on('pm',(msg,user)=>{
       let localUser = loggedUsers.userInfoByID(user.id);

       if(localUser){
           io.to(localUser.socketID).emit('pm',user);
       }else{
           console.log('Nao logado')
       }
    });


});
