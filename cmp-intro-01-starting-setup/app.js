const app = Vue.createApp({
    data() {
        return {
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
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.component("friend-contact", {
    template: `
    <li v-for="friend in friends" :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> 01234 5678 991</li>
            <li><strong>Email:</strong> manuel@localhost.com</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friends: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "1234",
                email: "manuel@localhost.com",
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
