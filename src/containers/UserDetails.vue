<template>
    <div v-if="user">
        <h1>Szczegóły użytkownika</h1>

        <h3>{{ user.name }} ({{ user.id }})</h3>

        <p>Wiek: {{ user.age }}</p>
        <p>Płeć: {{ user.gender }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "UserDetails",
        data() {
            return {
                user: null
            }
        },
        computed: {
            ...mapGetters(['returnUser'])
        },
        created() {
            const id = this.$route.params.id;
            console.log('returnUser', this.returnUser(id));

            this.user = this.returnUser(id);
        }
    }
</script>

<style scoped>

</style>
