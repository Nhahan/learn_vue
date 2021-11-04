const app = Vue.createApp({
    data() {
        return {
            // use ':', not '=' when set value for first rendering
            userInput: '',
            confirmname: ''
        }
    },
    methods: {
        showAlert() {
            alert('ALERT!')
        },
        registerUser(event) {
            this.userInput = event.target.value
        },
        confirmUser() {
            this.confirmname = this.userInput
        }
    },
})

app.mount('#assignment')