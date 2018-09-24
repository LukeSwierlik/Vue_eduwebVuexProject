<template>
    <div>
        <h1>Użytkownicy</h1>
        <UserList />

        <br>

        <ol>
            <li v-for="user in users">{{ user.name }} - {{ user.age }}</li>
        </ol>

    </div>
</template>

<script>
    import UserList from "../components/User/UserList";

    export default {
        name: "Users",
        computed: {
            users() {
                return this.$store.state.users;
            }
        },
        components: {
            UserList
        }
    }
</script>

<style scoped>

</style>
