<template>
    <div>
        <the-header></the-header>
        <button @click="setSelectedComponent('active-goals')">
            Active Goals
        </button>
        <button @click="setSelectedComponent('manage-goals')">
            Manage Goals
        </button>
        <!-- <active-goals
            v-if="selectedComponent === 'active-goals'"
        ></active-goals>
        <manage-goals
            v-if="selectedComponent === 'manage-goals'"
        ></manage-goals> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedComponent: "active-goals",
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },
        };
    },
    methods: {
        setSelectedComponent(cmp) {
            this.selectedComponent = cmp;
        },
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
