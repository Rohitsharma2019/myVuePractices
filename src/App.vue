<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome back Rohit" />
    <NewCompo />
    <hellorohit />
    <V_forExample />
    <rendring />
    <router-view></router-view>
    
</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NewCompo from "./components/NewCompo.vue";
import hellorohit from "./components/hellorohit.vue";
import V_forExample from "./components/V_forExample.vue";
import rendring from "./components/rendring.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        NewCompo,
        hellorohit,
        V_forExample,
        rendring
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
