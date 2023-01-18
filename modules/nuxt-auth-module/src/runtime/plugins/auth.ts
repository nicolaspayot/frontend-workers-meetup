import {addRouteMiddleware, defineNuxtPlugin, navigateTo} from '#app';
import {useAuth} from '../composables/useAuth';

export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const {isConnected} = useAuth();

        if (!isConnected.value) {
            return navigateTo('/signin');
        }
    });
});
