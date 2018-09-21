<template>
    <div id="app">
        <NavBar />
        <router-view/>
    </div>
</template>

<script>
    import NavBar from './containers/NavBar';

    export default {
        name: 'App',
        components: {NavBar}
    }
</script>
