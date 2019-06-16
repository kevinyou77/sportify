<template>
  <v-item-group id="promo">
      <v-layout>
        <h1>My Promo</h1>
        <v-spacer></v-spacer>
        
        <v-btn color="green" dark>
            <router-link to="/promo/create" tag="div" >
                Add Promo
            </router-link>
        </v-btn>
      </v-layout>
    
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex v-for="promo in promos" :key="promo" xs12 md4>
          <v-item>
            <router-link :to="{ name: 'promoDetail', params: { id: promo.id }}" tag="v-card" >
                <v-img :src="promo.img" height="200px"></v-img>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">{{promo.name}}</div>
                        <span class="grey--text">{{promo.discount}}%</span>
                        <v-spacer></v-spacer>
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
            promos:[
                {
                    id:1,
                    name: "Promo A",
                    discount: 15,
                    img: require("../../assets/029-investment.png"),
                    
                },
                {
                    id:2,
                    name: "Promo B",
                    discount: 15,
                    img: require("../../assets/029-investment.png"),
                    
                },
                {
                    id:3,
                    name: "Promo C",
                    discount: 15,
                    img: require("../../assets/029-investment.png"),
                    
                },
                {
                    id:4,
                    name: "Promo D",
                    discount: 15,
                    img: require("../../assets/029-investment.png"),
                    
                },
                {
                    id:5,
                    name: "Promo E",
                    discount: 15,
                    img: require("../../assets/029-investment.png"),
                    
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
