<!DOCTYPE html>
<html lang="<?php echo e(config('app.locale')); ?>">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"> 
    <?php echo $__env->yieldContent('extrastyles'); ?>
    <link rel="stylesheet" href="<?php echo e(URL::asset('css/app.css')); ?>">
</head>

<body>
    <div id="app">
    
        <?php echo $__env->yieldContent('content'); ?>
    </div>


    <?php echo $__env->yieldContent('pagescript'); ?>
</body>

</html>
<?php /**PATH /var/www/resources/views/master.blade.php ENDPATH**/ ?>