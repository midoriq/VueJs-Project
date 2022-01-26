<template>

     <p v-if = "errors.length">
          <b>Please correct the following error(s): </b>
          <ul>
               <li v-for = "error in errors" :key = "error"> {{ error }}</li>
          </ul>
     </p>

    <h1>Dodaj miasto</h1>
    <label>Name: </label>
    <input type="text" v-model="city.name" /><br />
    <label>Latitude: </label>
    <input type="text" v-model="city.latitude" /><br />
    <label>Longitude: </label>
    <input type="text" v-model="city.longitude" /><br />

    <button v-on:click="addCity">Submit</button>
</template>

<script>
export default {
    name: "add",
    data() {
        return {
            city: {
                name: null,
                latitude: null,
                longitude: null,
            },
            errors: []
        };
    },
    methods: {
        addCity() {
             this.errors = [];
             if(!this.city.name){
                  this.errors.push('Name required.');
             }
             if (!this.city.latitude || !this.city.longitude){
                  this.errors.push('Coords required')
             }

             let latTemp = Math.round(this.city.latitude);
             let logTemp = Math.round(this.city.longitude);

             if(latTemp < -90 || latTemp > 90){
                  this.errors.push('Latitude must be between -90 and 90 degrees inclusive')
             }

             if(logTemp < -180 || logTemp > 180){
                  this.errors.push('Latitude must be between -90 and 90 degrees inclusive')
             }


          if(this.errors.length == 0){
            let newCity = {
                Name: this.city.name,
                Latitude: this.city.latitude,
                Longitude: this.city.longitude,
            };
            console.log(newCity);
            this.$http.post("http://34.116.152.0/AddCoords", newCity)
               .then(this.$router.push({ path: "/cities"}));
          }

        },
    },
};
</script>

<style scoped></style>
