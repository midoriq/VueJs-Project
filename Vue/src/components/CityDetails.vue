<template>
    <div class="details">
        <h1>Details {{ this.cityData }}</h1>
        <div v-for="item in cityDetails" :key="item.Temp">
            <p>Temperature: {{ item.Temp }}</p>
            <p>Feels like: {{ item.Feels_like }}</p>
            <p>Pressure: {{ item.Pressure }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "details",
    data() {
        return {
            cityDetails: [],
        };
    },
    props: ["cityData"],
    mounted() {
        fetch("http://34.116.152.0/CurrentTemp/" + this.cityData)
            .then((res) => res.json())
            .then((data) => (this.cityDetails = data))
            .catch((err) => console.log(err.message));
    },
};
</script>

<style scoped>
.details {
    height: 60vh;
    width: 50vw;
    background-color: #8fbbaf;
}
</style>
