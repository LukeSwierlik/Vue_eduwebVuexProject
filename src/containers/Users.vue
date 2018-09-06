<template>
    <div>
        <h1>Użytkownicy</h1>
        <UserList :users="users"/>

        <br>

        <ol>
            <li v-for="user in users">{{ user.name }} - {{ user.age }}</li>
        </ol>

    </div>
</template>

<script>
    import UserList from "../components/UserList";
    import dataUsers from "../data/users";

    export default {
        name: "Users",
        computed: {
            users() {
                return dataUsers;
            }
        },
        components: {
            UserList
        }
    }
</script>

<style scoped>

</style>
