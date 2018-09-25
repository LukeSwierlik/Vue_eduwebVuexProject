<template functional>
    <header class="navbar">
        <section class="navbar-section">
            <router-link :to="{name: 'Home'}" class="navbar-brand mr-2">Home</router-link>
            <router-link :to="{name: 'Users'}" class="btn btn-link" >Użytkownicy</router-link>
            <router-link :to="{name: 'Product'}" class="btn btn-link" >Product</router-link>
            <router-link :to="{name: 'MainQuiz'}" class="btn btn-link" >Quiz</router-link>
        </section>

        <section class="navbar-section">
            <div class="input-group input-inline">
                <input class="form-input" type="text" placeholder="search">

                <button class="btn btn-primary input-group-btn">Search</button>
            </div>
        </section>
    </header>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>
