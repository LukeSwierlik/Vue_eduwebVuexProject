<template>
    <div>
        <div class="form-group col-3">
            <label for="form-label">Płeć</label>

            <select class="form-select" v-model="gender">
                <option value="all">Wszyscy</option>
                <option value="male">Męźczyźni</option>
                <option value="female">Kobiety</option>
            </select>
        </div>

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
                <UserItem v-for="(user, index) in selectData"
                          :user="user"
                          :index="index"
                          :key="user.id"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import UserItem from "./UserItem";

    export default {
        name: "UserList",
        data() {
            return {
                gender: "all"
            }
        },
        computed: {
            selectData() {
                if(this.gender === "female") {
                    return this.female;
                }
                else if(this.gender === "male") {
                    return this.male;
                }
                else {
                    return this.users;
                }
            },
            ...mapState(['users']),
            ...mapGetters(['female', 'male'])
        },
        components: {
            UserItem
        }
    };

</script>
