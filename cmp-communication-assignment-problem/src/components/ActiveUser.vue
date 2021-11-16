<template>
    <li>
        <ul>
            <li>username : {{ username }}</li>
            <li>age : {{ age }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    data() {},
    methods: {},
};
</script>

<style></style>
