<template>
    <div>
        <h1>Logowanie</h1>

        <form action="#" class="form-horizontal" @submit.prevent="login">
            <div class="form-group">
                <div class="col-2">
                    <label class="form-label">Hasło</label>
                </div>

                <div class="col-3">
                    <input type="password" class="form-input" v-model="password">
                </div>
            </div>

            <div class="col-5">
                <button
                    class="btn btn-primary float-right"
                    :class="{loading}"
                    :disabled="!password || loading"
                >
                    Zaloguj
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "UserLogin",
        data() {
            return {
                password: "",
                loading: false
            }
        },
        methods: {
            login() {
                this.loading = true;
                const url = 'http://localhost:3000/login';

                axios
                    .post(url, {
                        password: this.password
                    })
                    .then(({ data }) => {
                        this.loading = false;

                        window.localStorage.setItem('token', data.token);

                        this.$router.push({
                            name: 'Home'
                        });
                    });
            }
        }
    }
</script>

<style scoped>

</style>
