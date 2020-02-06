<template>
    <div id="app">
        <Nav />
        <router-view />
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: "app",
    components: {
        Nav
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap");
</style>
