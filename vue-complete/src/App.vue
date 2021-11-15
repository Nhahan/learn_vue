<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>

<script>
export default {
    date() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "1234",
                    email: "manuel@localhost.com",
                },
                {
                    id: "manuel2",
                    name: "Manuel Lorenz2",
                    phone: "5678",
                    email: "manuel2@localhost.com",
                },
            ],
        };
    },
};
</script>
