<template>
    <div class="p-8">
        <h1 class="text-2xl font-bold">Test Page</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>
