const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            tasks: [],
            key: 1,
            hideAndShowText: 'Hide',
            hideAndShowBoolean: true,
        }
    },
    methods: {
        submit() {
            const data = {
                key: this.key,
                task: this.taskInput,
            }

            this.key += 1

            this.tasks.push(this.taskInput);
        },
        hideAndShow() {
            if (this.hideAndShowBoolean) {
                this.hideAndShowText = "Show"
                this.hideAndShowBoolean = !this.hideAndShowBoolean
            } else {
                this.hideAndShowText = "Hide"
                this.hideAndShowBoolean = !this.hideAndShowBoolean
            }
        },
        removeTask(idx) {
            this.tasks.splice(idx, 1)
        }
    }
})

app.mount('#assignment')