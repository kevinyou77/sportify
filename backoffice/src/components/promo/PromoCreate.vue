<template>
  <v-layout>
    <v-container fluid class="pa-0">
      <v-layout row wrap align-center>
        <v-card id="create-card-display">
          <h1>Create Promo</h1>
          <v-form ref="form" v-model="valid" lazy-validation id="create-card-form">
            <v-flex xs12 sm6>
              <v-text-field v-model="name" :rules="nameRules" label="Promo Name" required></v-text-field>
              <v-textarea
                name="input-7-1"
                label="Promo Description"
                value
                hint="Promo Description"
                v-model="description"
                :rules="descriptionRules"
              ></v-textarea>
              <v-text-field v-model="discount" :rules="discountRules" label="Promo Discount" required></v-text-field>
              <v-item-group>
                <v-subheader>Courts</v-subheader>
                <v-item v-for="court in courts" :key="court">
                  <v-chip
                    slot-scope="{ active, toggle }"
                    :selected="active"
                    @click="toggle"
                    v-model="selectedSport"
                  >{{ court.name }}</v-chip>
                </v-item>
              </v-item-group>


              <v-btn color="green" @click="validate" dark>Submit</v-btn>
            </v-flex>
            <v-flex xs12 sm6>
              <div class="text-xs-center">
                
              </div>
            </v-flex>
          </v-form>
        </v-card>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Promo Name is required"],
    description: "",
    descriptionRules: [v => !!v || "Promo Description is required"],
    discount: "",
    discountRules: [v => !!v || "Promo Discount is required"],
    courts:[{name:"Court A"},{name:"Court B"},{name:"Court C"}],
    selectedCourt:"",
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
#create-card-display {
  width: 99%;
  padding-top: 0%;
  padding: 3%;
}
#create-card-form {
  padding-top: 5%;
}
</style>
