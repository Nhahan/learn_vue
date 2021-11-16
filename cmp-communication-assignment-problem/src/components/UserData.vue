<template>
    <form @submit.prevent="submitData">
        <div>
            <input type="text" v-model="username" placeholder="Username" />
        </div>
        <div><input type="number" v-model="age" placeholder="Age" /></div>
        <button>Submit</button>
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
