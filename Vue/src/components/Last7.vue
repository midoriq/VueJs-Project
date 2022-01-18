<template>
  <div class="last7 container">
    <h1 class="page-header">TEMPETURE IN LAST 7 DAYS</h1>
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
        <tr v-for="last7 in last7Temp" :key="last7.Id">
          <td>{{ last7.Humidity }}</td>
          <td>{{ last7.MaxTemp }}</td>
          <td>{{ last7.MinTemp }}</td>
          <td>{{ last7.Temp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "last7",
  data() {
    return {
      last7Temp: []
    };
  },
  methods: {
    fetchLast7Temp() {
      this.$http.get("http://localhost:8080/Last7").then(function(response) {
        this.last7Temp = response.body.Data;
        console.log(response.body);
      });
    }
  },
  created: function() {
    this.fetchLast7Temp();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
