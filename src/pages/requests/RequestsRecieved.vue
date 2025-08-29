<template>
    <section>
        <base-card>
            <header>
                <h2>Request Received</h2>
            </header>
            <ul v-if="hasRequests">
                <requests-item v-for="request in receivedRequests" :key="request.id" :email="request.userEmail"
                    :message="request.message"></requests-item>
            </ul>
            <h3 v-else>You haven't received any request yet!</h3>
        </base-card>
    </section>
</template>

<script>
import RequestsItem from '../../components/requests/requestsItem.vue';


export default {
    components: { RequestsItem },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        },
    },
};
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>