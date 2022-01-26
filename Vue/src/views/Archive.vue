<template>
    <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="archiveItem in archiveTemp" :key="archiveItem.Date">
                <td>{{ archiveItem.Date }}</td>
                <td>{{ archiveItem.Temp }}</td>
                <td>{{ archiveItem.Pressure }}</td>
                <td>{{ archiveItem.Humidity }}</td>
            </tr>
        </tbody>
    </table>
    <p class="more" v-on:click="showMoreLess('more')">show more...</p>
    <p class="more" v-on:click="showMoreLess('less')">show less...</p>
</template>

<script>
export default {
    name: "archive",
    data() {
        return {
            archiveTemp: [],
            showNo: 5,
        };
    },
    methods: {
        fetchData() {
            fetch("http://34.116.152.0/Measurments/" + this.showNo)
                .then((res) => res.json())
                .then((data) => (this.archiveTemp = data.Measurments))
                .catch((err) => console.log(err.message));
        },
        showMoreLess(choose) {
            if (choose == "more") this.showNo += 5;
            else if (choose == "less" && this.showNo >= 10) this.showNo -= 5;
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

td,
th {
    padding: 20px;
    border: 1px solid black;
}

th {
    background-color: #8fbbaf;
}

table {
    border-collapse: collapse;
    width: 70%;
    margin: 30px auto;
}
table tr:nth-child(even) {
    background-color: #f4f9f4;
}
</style>
