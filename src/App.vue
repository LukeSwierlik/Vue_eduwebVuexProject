<template>
    <div id="app">
        <NavBar />

        <transition name="slide" mode="out-in" appear>
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios';
    import NavBar from './containers/NavBar';

    export default {
        name: 'App',
        components: {NavBar},
        methods: {
            // TODO: All this methods change to Actions/Mutations
            fetchUsers() {
                const url = 'http://localhost:3000/users';

                axios
                    .get(url)
                    .then(({ data }) => {
                        this.$store.state.storeUsers.users = data;
                    });
            },
            fetchProduct() {
                const url = 'http://localhost:3000/product';

                axios
                    .get(url)
                    .then(({ data }) => {
                        this.$store.state.storeProduct.product = data;
                    });
            },
            fetchQuestions() {
                const url = 'http://localhost:3000/questions';

                axios
                    .get(url)
                    .then(({ data }) => {
                        this.$store.state.storeQuiz.questions = data;
                    });
            }
        },
        created() {
            this.fetchUsers();
            this.fetchProduct();
            this.fetchQuestions();
        }
    }
</script>

<style scoped>
    .slide-enter-active,
    .slide-leave-actice {
        transition: transform 0.5s ease-in-out;
    }
    .slide-enter {
        transform: translateX(-100vw);
    }
    .slide-leave-to {
        transform: translateX(100vw);
    }
</style>
