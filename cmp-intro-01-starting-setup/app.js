const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "1234",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Hones",
                    phone: "5678",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
