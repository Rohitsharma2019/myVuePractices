<template>
<div>
    <ul>
        <li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
    </ul>
    <a v-bind:href = "hreflink" :title = "title">Click Me </a>
</div>
</template>
<script>
export default {
    data() {
        return {
            fruits: ['apple', 'banana', 'orange', 'grapes', 'guava'],
            title : "data binding",
            hreflink : "http://www.google.com"
        };
    }
            
};
</script>

