<template>
  <div id="history">
    <v-card-title>
      <h1>Sales History</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td>{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.income }}</td>
        <td class="text-xs-right">{{ props.item.buyer }}</td>
        <td class="text-xs-right">{{ props.item.starttime }}</td>
        <td class="text-xs-right">{{ props.item.endtime }}</td>
        <td class="text-xs-right">{{ props.item.rating }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagination: { rowsPerPage: 10 },
      search: "",
      headers: [
        { text: "Transaction Date", align: "left", value: "date" },
        { text: "Court Name", value: "name" },
        { text: "Income (Rp)", value: "income" },
        { text: "Buyer", value: "buyer" },
        { text: "Start Time", value: "starttime" },
        { text: "End Time", value: "endtime" },
        { text: "Rating", value: "rating" }
      ],
      items: [
        {
          date: "24-03-2019",
          name: "Court B",
          income: 400000,
          buyer: "Matt",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.0
        },
        {
          date: "24-03-2019",
          name: "Court B",
          income: 400000,
          buyer: "Matt",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.0
        },
        {
          date: "24-03-2019",
          name: "Court A",
          income: 400000,
          buyer: "Matt",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.0
        },
        {
          date: "24-03-2019",
          name: "Court C",
          income: 500000,
          buyer: "Matt",
          starttime: "08.00",
          endtime: "09.00",
          rating: 3.9
        },
        {
          date: "24-03-2019",
          name: "Court C",
          income: 500000,
          buyer: "Propo",
          starttime: "08.00",
          endtime: "09.00",
          rating: 3
        },
        {
          date: "25-03-2019",
          name: "Court C",
          income: 500000,
          buyer: "Propo",
          starttime: "08.00",
          endtime: "09.00",
          rating: 3.8
        },
        {
          date: "25-03-2019",
          name: "Court C",
          income: 500000,
          buyer: "Propo",
          starttime: "08.00",
          endtime: "09.00",
          rating: 3.7
        },
        {
          date: "25-03-2019",
          name: "Court C",
          income: 100000,
          buyer: "Propo",
          starttime: "08.00",
          endtime: "09.00",
          rating: 2
        },
        {
          date: "25-03-2019",
          name: "Court C",
          income: 100000,
          buyer: "Propo",
          starttime: "08.00",
          endtime: "09.00",
          rating: 2.4
        },
        {
          date: "25-03-2019",
          name: "Court C",
          income: 100000,
          buyer: "Bayu",
          starttime: "08.00",
          endtime: "09.00",
          rating: 2.7
        },
        {
          date: "25-03-2019",
          name: "Court C",
          income: 200000,
          buyer: "Bayu",
          starttime: "08.00",
          endtime: "09.00",
          rating: 2.1
        },
        {
          date: "26-03-2019",
          name: "Court C",
          income: 200000,
          buyer: "Bayu",
          starttime: "08.00",
          endtime: "09.00",
          rating: 2.5
        },
        {
          date: "26-03-2019",
          name: "Court B",
          income: 200000,
          buyer: "Jono",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4
        },
        {
          date: "26-03-2019",
          name: "Court B",
          income: 200000,
          buyer: "Jono",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.5
        },
        {
          date: "26-03-2019",
          name: "Court B",
          income: 300000,
          buyer: "Jono",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.1
        },
        {
          date: "26-03-2019",
          name: "Court A",
          income: 300000,
          buyer: "Jono",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.3
        },
        {
          date: "26-03-2019",
          name: "Court A",
          income: 300000,
          buyer: "Tika",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.3
        },
        {
          date: "27-03-2019",
          name: "Court A",
          income: 300000,
          buyer: "Tika",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.3
        },
        {
          date: "27-03-2019",
          name: "Court A",
          income: 300000,
          buyer: "Tika",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.6
        },
        {
          date: "27-03-2019",
          name: "Court A",
          income: 400000,
          buyer: "Tika",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.6
        },
        {
          date: "27-03-2019",
          name: "Court B",
          income: 400000,
          buyer: "Matt",
          starttime: "08.00",
          endtime: "09.00",
          rating: 4.0
        },

      ]
    };
  }
};
</script>

<style>
</style>
