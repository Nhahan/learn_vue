<template>
    <div>
        <h2>ManageGoals</h2>
        <input type="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
    </div>
</template>

<script>
export default defineComponent({
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === "") {
                alert("Input must not be empty");
            }
        },
    },
});
</script>
