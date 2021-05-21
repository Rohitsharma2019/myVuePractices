<template>
<div>
    <h2>{{product}}</h2>
    <p v-if="instock">In stock</p>
    <p v-else>out of stock</p>
</div>
</template>

<script>
export default {
    data() {
        return{
        product: "T-shirt",
        instock: true
        }
    }
}
</script>
