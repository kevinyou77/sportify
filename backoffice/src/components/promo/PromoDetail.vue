<template>
  <v-layout id="promoDetail">
    <v-flex>
      <v-card>
        <v-card-title>
          <h1>{{promo.name}}</h1>
          <v-spacer></v-spacer>
          <v-btn color="green" dark>
            <router-link :to="{ name: 'promoEdit', params: { id: promo.id }}" tag="div" >
                Edit Promo
            </router-link>
        </v-btn>
        </v-card-title>
        <v-card-text>Court: {{promo.court}} | Discount: {{promo.discount}}%</v-card-text>
        <v-card-text>{{promo.description}}</v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h2>Sales of {{promo.name}}</h2>
        </v-card-title>
        <v-card-text>
          <div class="chart-wrapper">
            <chart :options="chartOptionsBar"></chart>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      promo: {
        id:1,
        name: "Promo A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur interdum a sem. Nulla malesuada varius laoreet. Donec egestas mi ex, gravida viverra purus viverra at. Suspendisse vulputate mollis auctor. Sed sapien neque, maximus eget tincidunt at, efficitur a enim. Morbi pretium luctus nulla, in tempus est cursus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur dignissim diam ut mattis aliquet. Aenean accumsan pharetra pellentesque.",
        discount: 15,
        court: "Court A",
        img: require("../../assets/029-investment.png")
      },
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
          type: "value"
        },
        series: [
          {
            type: "line",
            data: [5, 7, 8, 14, 5, 6, 8, 17, 9, 10, 12, 18]
          }
        ]
      },
      
    };
  }
};
</script>

<style>
#promoDetail .chart-wrapper {
  width: 100%;
  height: 80%;
}

#promoDetail .echarts {
  width: 100%;
}
</style>
