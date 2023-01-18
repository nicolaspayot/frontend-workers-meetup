<template>
    <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-6">
        <h1 class="font-bold text-3xl mb-10">Sign in to your account</h1>
        <form class="bg-white drop-shadow-md w-full max-w-md flex flex-col rounded-md p-8" @submit.prevent="submit">
            <div class="flex flex-col mb-5">
                <label class="mb-1 text-sm font-medium text-gray-500">Email address</label>
                <input class="rounded-md border-gray-200 border-2 p-2 outline-none" type="email" />
            </div>
            <div class="flex flex-col mb-5">
                <label class="mb-1 text-sm font-medium text-gray-500">Password</label>
                <input class="rounded-md border-gray-200 border-2 p-2 outline-none" type="password" />
            </div>
            <button
                type="submit"
                class="inline-block px-6 py-3 bg-blue-700 text-white text-sm rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                Sign in
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import {useAuth} from '../composables/useAuth';

    const {signin} = useAuth();

    function submit() {
        signin();
    }
</script>
