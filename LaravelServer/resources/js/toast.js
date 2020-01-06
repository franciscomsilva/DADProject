import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted,{
    position: "top-right",
    duration: 5000,
    type: "info"
});
Vue.toasted.register('unauthenticated', 'Unauthenticated!', {
    type: 'error',
})

Vue.toasted.register('unauthorized', 'Unauthorized!', {
    type: 'error',
})