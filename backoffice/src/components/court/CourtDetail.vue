<template>
  <v-layout id="courtDetail">
    <v-flex>
      <v-card>
        <v-card-title>
          <h1>{{court.name}}</h1>
          <v-rating v-model="court.rating" half-increments dense></v-rating>
          <v-spacer></v-spacer>
          <v-btn color="green" dark>
            <router-link :to="{ name: 'courtEdit', params: { id: court.id }}" tag="div" >
                Edit Promo
            </router-link>
          </v-btn>
        </v-card-title>
        <v-card-text>Sport: {{court.sport}} | Price: {{court.price}}</v-card-text>
        <v-card-text>{{court.description}}</v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h2>Sales of {{court.name}}</h2>
        </v-card-title>
        <v-card-text>
          <div class="chart-wrapper">
            <chart :options="chartOptionsBar"></chart>
          </div>
        </v-card-text>
      </v-card>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">
                <h2>
                    {{ item.header }}
                </h2>
            </v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-tile v-else :key="item.title" avatar >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-rating v-model="item.rating" half-increments dense></v-rating>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      court: {
        id:1,
        name: "Court A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur interdum a sem. Nulla malesuada varius laoreet. Donec egestas mi ex, gravida viverra purus viverra at. Suspendisse vulputate mollis auctor. Sed sapien neque, maximus eget tincidunt at, efficitur a enim. Morbi pretium luctus nulla, in tempus est cursus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur dignissim diam ut mattis aliquet. Aenean accumsan pharetra pellentesque.",
        price: 300000,
        sport: "Basketball",
        img: require("../../assets/029-investment.png"),
        rating: 4.0
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
      items: [
          { header: 'Review of Court A' },
          {
            avatar: require("../../assets/logo.png"),
            title: 'Lorem Ipsum',
            rating: 4,
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur?"
          },
          { divider: true, inset: true },
          {
            avatar: require("../../assets/logo.png"),
            title: 'Lorem Ipsum',
            rating: 4,
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur"
          },
          { divider: true, inset: true },
          {
            avatar: require("../../assets/logo.png"),
            title: 'Lorem Ipsum',
            rating: 4,
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur"
          },
          { divider: true, inset: true },
          {
            avatar: require("../../assets/logo.png"),
            title: 'Lorem Ipsum',
            rating: 4,
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur"
          },
          { divider: true, inset: true },
          {
            avatar: require("../../assets/logo.png"),
            title: 'Lorem Ipsum',
            rating: 4,
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc eu odio efficitur consectetur"
          }
        ]
    };
  }
};
</script>

<style>
#courtDetail .chart-wrapper {
  width: 100%;
  height: 80%;
}

#courtDetail .echarts {
  width: 100%;
}
</style>
