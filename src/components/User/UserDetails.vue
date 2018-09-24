<template>
    <div v-if="user">
        <h1>Szczegóły użytkownika</h1>

        <h3>{{ user.name }} ({{ user.id }})</h3>

        <p>Wiek: {{ user.age }}</p>
        <p>Płeć: {{ user.gender }}</p>

        <router-view/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "UserDetails",
        props: ['id'],
        data() {
            return {
                user: null
            }
        },
        computed: {
            ...mapGetters('storeUsers', ['returnUser'])
        },
        created() {
            const id = this.id;

            this.user = this.returnUser(id);
        }
    }
</script>

<style scoped>

</style>
