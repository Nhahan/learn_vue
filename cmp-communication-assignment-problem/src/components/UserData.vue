<template>
    <form @submit.prevent="submitData">
        <input type="text" v-model="username" />
        <input type="text" v-model="age" />
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            age: "",
        };
    },
    methods: {
        submitData() {
            this.$emit("submitData", this.username, this.age);
        },
    },
};
</script>

<style></style>
