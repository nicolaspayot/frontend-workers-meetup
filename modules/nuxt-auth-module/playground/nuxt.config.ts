import {defineNuxtConfig} from 'nuxt/config';
import MyModule from '..';

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', MyModule],
});
