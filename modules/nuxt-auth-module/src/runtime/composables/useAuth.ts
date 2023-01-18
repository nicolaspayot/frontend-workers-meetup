import {ref} from 'vue';
import {useCookie, navigateTo} from '#app';

export function useAuth() {
    const sessionCookie = useCookie('SESSION_ID');
    const isConnected = ref(sessionCookie.value != null);

    const isAdmin = ref(true);

    function signin() {
        sessionCookie.value = 'xxx';
        isConnected.value = true;

        return navigateTo('/');
    }

    return {
        isConnected,
        isAdmin,
        signin,
    };
}
