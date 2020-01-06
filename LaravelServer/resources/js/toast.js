import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted,{
    position: "bottom-center",
        duration: 5000,
        type: "info"
});
Vue.toasted.register('unauthenticated', 'Unauthenticated!', {
    type: 'error',
})

Vue.toasted.register('unauthorized', 'Unauthorized!', {
    type: 'error',
})
