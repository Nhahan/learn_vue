const app = Vue.createApp({
    data() {
        username = ''
        confirmname = ''
    },
    methods: {
        keydownAlert() {
            alert('keydown!')
        },
        registerUser(event) {
            this.username = event.target.value
        },
        confirmname(event) {
            this.confirmname = event.target.value
        }
    },
})

app.mount('#assignment')