const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected }
        },
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                console.log("A")
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                console.log("B")
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                console.log("C")
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling')
