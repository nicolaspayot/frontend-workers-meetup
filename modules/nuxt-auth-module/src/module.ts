import {fileURLToPath} from 'url';
import {addPlugin, addImportsDir, createResolver, defineNuxtModule, extendPages} from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@malt/nuxt-auth-module',
    },
    setup() {
        const {resolve} = createResolver(import.meta.url);
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

        // Add /signin page to Nuxt app
        extendPages((pages) => {
            pages.push({
                name: 'Signin',
                path: '/signin',
                file: resolve(runtimeDir, 'pages/signin.vue'),
            });
        });

        // Add plugins to Nuxt app
        addPlugin(resolve(runtimeDir, 'plugins/auth'));

        // Add composables to Nuxt app
        addImportsDir(resolve(runtimeDir, 'composables'));
    },
});
