<template>
    <div class="flex w-full items-center border-b border-gray-200 last:border-b-0 px-5 py-4 text-sm">
        <div class="mr-auto">
            <span class="inline-block text-blue-500 font-medium mb-2">{{ props.jobTitle }}</span>
            <span class="flex text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path
                        d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
                    />
                </svg>
                <span class="ml-1">{{ props.team }}</span>
            </span>
        </div>
        <div class="flex flex-col items-end">
            <span class="inline-block text-xs bg-yellow-200 py-1 px-2 rounded mb-2">Full-time</span>
            <span class="flex text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path
                        fill-rule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clip-rule="evenodd"
                    />
                </svg>
                <span class="ml-1">Remote</span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        jobTitle: string;
        team: string;
    }>();
</script>
