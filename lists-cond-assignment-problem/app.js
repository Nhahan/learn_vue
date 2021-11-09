const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            tasks: [],
            struct: class taskClass {
                constructor(key, task) {
                    this.key = key;
                    this.task = task;
                }
            }

        }
    },
    methods: {
        submit() {
            console.log("submit!")

            const date = new Date();
            const key = date.getHours() + date.getMinutes + date.getSeconds + date.getMilliseconds

            const newTask = new taskClass(key, this.taskInput)
            
            this.tasks.push(newTask);
        },
    }
})

app.mount('#assignment')