<template>
    <div>
        <h1>Edycja użytkownika</h1>

        <div class="form-group col-3">
            <label class="form-label">Imię i Nazwisko</label>
            <input
                type="text"
                class="form-input"
                :value="user.name"
                @change="update($event, 'name')"
            />
        </div>

        <div class="form-group col-3">
            <label class="form-label">Wiek</label>
            <input
                type="text"
                class="form-input"
                :value="user.age"
                @change="update($event, 'age')"
            />
        </div>

        <div class="form-group col-3">
            <label class="form-label">Płeć</label>
            <select class="form-select" @change="update($event, 'gender')">
                <option value="male"
                        :selected="user.gender === 'male'"
                >męska</option>
                <option
                    value="female"
                    :selected="user.gender === 'female'"
                >żeńska</option>
            </select>
        </div>

        <hr/>

        <button class="btn btn-primary" @click="$router.push({name: 'Users'})">Powrót</button>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex';

    export default {
        name: "UserEdit",
        props: ['id'],
        computed: {
            ...mapGetters('storeUsers', ['returnUser'])
        },
        created() {
            const id = this.id;

            this.user = this.returnUser(id);
        },
        methods: {
            update(e, type) {
                const value = e.target.value;

                this.updateUser({
                    id: this.user.id,
                    value,
                    type
                });
            },
            ...mapMutations('storeUsers', ['updateUser'])
        },
        beforeRouteEnter(to, from, next) {
            if(window.localStorage.getItem('token')) {
                next();
            } else {
                next({
                    name: 'Login'
                });
            }
        }
    }
</script>
