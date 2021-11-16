<template>
    <div>
        <the-header></the-header>
</template>

<script>
export default {
    data() {
        return {
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },
        };
    },
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
