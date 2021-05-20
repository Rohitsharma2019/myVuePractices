<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome back Rohit" />
    <NewCompo />
    <hellorohit />
</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NewCompo from "./components/NewCompo.vue";
import hellorohit from "./components/hellorohit.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        NewCompo,
        hellorohit
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
