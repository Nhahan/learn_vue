<template>
    <div>
        <section>
            FILTER
        </section>
            
        <section>
            <div class="controls">
                <button>Refresh</button>    
                <router-link to="/register">Register as Coach</router-link>    
            </div> 
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{ coach.firstName }}
            </li>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        filteredCoaches() {
            return this.$store.getters['coachesModule/coaches'];
        }
    }
}
</script>