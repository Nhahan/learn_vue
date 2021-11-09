const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            user1boolean: false,
            user2boolean: false,
            showParagraph: true,
        }
    },
    watch: {
        userInput() {
            if (this.userInput === "user1") {
                this.user1boolean = !this.user1boolean;
            } else if (this.userInput === "user2") {
                this.user2boolean = !this.user2boolean;
            } else {
                this.user1boolean = false;
                this.user2boolean = false;
            }
        }},
    methods: {
        toggleParagraph() {
            this.showParagraph = !this.showParagraph;
        },
    },

})

app.mount('#assignment')