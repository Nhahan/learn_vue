const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            showParagraph: true,
        }
    },
    computed: {
        computedClass() {
            return {
                user1: this.userInput === 'user1', 
                user2: this.userInput === 'user2',
                hidden: this.userInput === 'hidden',
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.showParagraph = !this.showParagraph;
        },
    },

})

app.mount('#assignment')