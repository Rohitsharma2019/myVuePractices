<template>
<div>
    <h2>This is new component</h2>
    <h1>{{string}}</h1>
    <input type="text" v-model="string" placeholder="please type here.." />

</div>
</template>

<script>
export default {
    name: 'NewCompo',
    data() {
        return {
            string: "please type here.."
        }
    }
}
</script>

<style scoped>
h1 {
    white-space: pre-line
}
</style>
