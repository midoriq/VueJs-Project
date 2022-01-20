<template>
  <div class="current container">
    <h1 class="page-header">CURRENT TEMPETURE</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Humidity</th>
          <th>Max Temperature</th>
          <th>Min Temperature</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currents" :key="item.Temp">
          <td>{{ item.Humidity }}</td>
          <td>{{ item.MaxTemp }}</td>
          <td>{{ item.MinTemp }}</td>
          <td>{{ item.Temp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "current",
  data() {
    return {
      currents: []
    };
  },
  methods: {
    fetchCurrentTemp() {
      this.$http
        .get("http://localhost:8080/CurrentTemp")
        .then(function(response) {
          this.currents = response.body;
        });
    }
  },
  created: function() {
    this.fetchCurrentTemp();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
