<template>
    <li>
        <h2>
            {{ friend.name }}
        </h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Eamil:</strong> {{ friend.eamil }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel2",
                name: "Manuel Lorenz2",
                phone: "5678",
                email: "manuel2@localhost.com",
            },
        };
    },
    mehotds: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
};
</script>
