import {fileURLToPath} from 'url';
import {createResolver, defineNuxtModule} from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@malt/nuxt-auth-module',
    },
    setup() {
        const {resolve} = createResolver(import.meta.url);
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    },
});
