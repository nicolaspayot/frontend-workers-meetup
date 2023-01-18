<template>
    <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-6">
        <div class="bg-white drop-shadow-md w-full max-w-4xl flex flex-col justify-between rounded-md">
            <div class="flex w-full items-center border-b-2 border-gray-200 px-5 py-4">
                <img
                    src="https://avatars.githubusercontent.com/u/463319?v=4"
                    width="56"
                    height="56"
                    alt="Avatar"
                    class="w-14 h-14 rounded-full mr-4"
                />
                <div class="flex flex-col mr-auto">
                    <span class="text-lg font-medium">Nicolas Payot</span>
                    <span class="text-sm text-gray-400">@nicolaspayot</span>
                </div>

                <button
                    v-if="isAdmin"
                    type="button"
                    class="inline-block px-6 py-3 bg-blue-700 text-white text-sm rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Create new job
                </button>
            </div>
            <JobItem job-title="Front-End Developer" team="Engineering" />
            <JobItem job-title="Back-End Developer" team="Engineering" />
            <JobItem job-title="Product Designer" team="Product" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import {JobItem} from '#components';
    import {definePageMeta, useAuth} from '#imports';

    const {isAdmin} = useAuth();

    definePageMeta({
        middleware: 'auth',
    });
</script>
