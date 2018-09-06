<template>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Lp.</th>
                <th>Imię i nazwisko</th>
                <th>Wiek</th>
                <th>Edytuj</th>
            </tr>
        </thead>
        <tbody>
            <UserItem v-for="(user, index) in users"
            :user="user"
            :index="index"
            :key="user.id"
            />
        </tbody>
    </table>

</template>

<script>

    import UserItem from "./UserItem";

    export default {
        name: "UserList",
        props: ["users"],
        components: {
            UserItem
        }
    };

</script>