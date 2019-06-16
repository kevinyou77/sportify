<template>
  <v-item-group id="overview">
      <h1>Overview</h1>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex
          v-for="menu in menus"
          :key="menu"
          xs12
          md4
        >
          <v-item>
            <v-card
              class="d-flex align-center"
              height="200"
              :color="menu.color"
            >  
            <v-layout column>
                <v-layout row>
                    <v-flex xs7>
                        <v-card-title primary-title>
                            <div class="whiteText" id="menu-data">
                                <div id="menu-data-head" >{{menu.data}}</div>
                                <div id="menu-data-name">{{menu.name}}</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs5>
                        <v-img
                            :src="menu.img"
                            height="110px"
                            class="icon"
                            contain
                        ></v-img>
                    </v-flex>
                </v-layout>
                <router-link :to="menu.link" tag="v-layout" id="menu-lower-space">
                    <div>
                        <p class="whiteText">More Info</p>
                    </div>
                </router-link>
            </v-layout>
                
                
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
    <div id="graphicSection">
        <div id="graphTitle" >
            Sales
        </div>
        <div id="graph" class="chart-wrapper">
            <chart :options="chartOptionsBar"></chart>
        </div>
    </div>
  </v-item-group>

</template>

<script>
export default {
    data(){
        return{
            menus:[
                {
                    name: "Courts Available",
                    color: "#00c0ef",
                    data: 7,
                    img: require("../assets/029-investment.svg"),
                    link:'/court',
                },
                {
                    name: "Transaction Done",
                    color: "#00a65a",
                    data: 20,
                    img: require("../assets/036-add.svg"),
                    link:'/history',
                },
                {
                    name: "Promos Available",
                    color: "#f39c12",
                    data: 5,
                    img: require("../assets/014-percentage.svg"),
                    link:'/promo',
                }
            ],
            chartOptionsBar: {
                xAxis: {
                    data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    type: 'line',
                    data: [55, 72, 84, 48, 59, 62, 87, 75, 94, 101, 127, 118]
                    }
                ]
            }
        }
    },
}
</script>

<style>
#overview v-card{
    cursor: default !important;
}
#menu-data-head{
    font-size: 3rem;
}
#menu-lower-space{
    text-align: center;
    padding: 2%;
    position: relative;
    left: 5%;
    width: 92.5%;
    height: 40px;
    border-radius: 1%;
    background-color: rgba(0, 0, 0, 0.1);
}
#menu-data{
    padding-left: 10%;
}
#menu-data-name{
    display: inline-block;
}
#overview #graphicSection{
    margin-top: 3%;
    box-shadow: black 10px;
    border-radius: 1%;
    width: 100%;
    height: 48vh;
    background-color: white;
}
#overview #graphTitle{
    padding: 2%;
    padding-left: 3%;
    font-size: 2rem;
}

#overview .chart-wrapper {
  width: 100%;
  height: 80%;
}
#overview .echarts {
  width: 100%;
  height: 100%;
}

.icon{
    fill: white !important;
}
</style>
