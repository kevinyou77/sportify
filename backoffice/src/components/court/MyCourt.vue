<template>
  <v-item-group id="court">
      <v-layout>
        <h1>My Court</h1>
        <v-spacer></v-spacer>
        
        <v-btn color="green" dark>
            <router-link to="/court/create" tag="div" >
                Add Court
            </router-link>
        </v-btn>
      </v-layout>
    
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex v-for="court in courts" :key="court" xs12 md4>
          <v-item>
            <router-link :to="{ name: 'courtDetail', params: { id: court.id }}" tag="v-card" >
                <v-img :src="court.img" height="200px"></v-img>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">{{court.name}}</div>
                        <span class="grey--text">Rp {{court.price}}</span>
                        <v-spacer></v-spacer>
                        <v-rating v-model="court.rating" half-increments dense></v-rating>
                    </div>
                </v-card-title>
            </router-link>
            
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
    data(){
        return{
            courts:[
                {
                    id:1,
                    name: "Courts Available",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:3.5,
                },
                {
                    id:2,
                    name: "Courts A",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:4.8,
                },
                {
                    id:3,
                    name: "Courts B",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:2.5,
                },
                {
                    id:4,
                    name: "Courts C",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:4.1,
                },
                {
                    id:5,
                    name: "Courts D",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:1,
                },
                {
                    id:6,
                    name: "Courts E",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:4.5,
                },
                {
                    id:7,
                    name: "Courts F",
                    price: 300000,
                    img: require("../../assets/029-investment.png"),
                    rating:4.5,
                },
            ],
        }
    }
    
};
</script>

<style>
#btn-add-court{
    background-color: green;
}
</style>
