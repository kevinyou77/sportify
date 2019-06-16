<template>
    <div id="schedule">
        <v-toolbar flat color="white">
      <v-toolbar-title>My Schedule</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.day" label="Day"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.court" label="Court"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.start" label="Start Time"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.end" label="End Time"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
        :headers="headers"
        :items="schedules"
        class="elevation-1"
        :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td>{{ props.item.day }}</td>
        <td class="text-xs-right">{{ props.item.court }}</td>
        <td class="text-xs-right">{{ props.item.start }}</td>
        <td class="text-xs-right">{{ props.item.end }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    </div>
</template>

<script>
export default {
    data: () => ({
      pagination: {rowsPerPage: 10},
      dialog: false,
      headers: [
        {
          text: 'Day',
          align: 'left',
          value: 'day'
        },
        { text: 'Court', value: 'court' },
        { text: 'Start Time', value: 'start' },
        { text: 'End Time', value: 'end' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      schedules: [],
      editedIndex: -1,
      editedItem: {
        day: '',
        court: 0,
        start: 0,
        end: 0,
      },
      defaultItem: {
        day: '',
        court: 0,
        start: 0,
        end: 0,
      }
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.schedules = [
          {
            day: 'Frozen Yogurt',
            court: 159,
            start: 6.0,
            end: 24,
          },
          {
            day: 'Ice cream sandwich',
            court: 237,
            start: 9.0,
            end: 37,
          },
          {
            day: 'Eclair',
            court: 262,
            start: 16.0,
            end: 23,
          },
          {
            day: 'Cupcake',
            court: 305,
            start: 3.7,
            end: 67,
          },
          {
            day: 'Gingerbread',
            court: 356,
            start: 16.0,
            end: 49,
          },
          {
            day: 'Jelly bean',
            court: 375,
            start: 0.0,
            end: 94,
          },
          {
            day: 'Lollipop',
            court: 392,
            start: 0.2,
            end: 98,
          },
          {
            day: 'Honeycomb',
            court: 408,
            start: 3.2,
            end: 87,
          },
          {
            day: 'Donut',
            court: 452,
            start: 25.0,
            end: 51,
          },
          {
            day: 'KitKat',
            court: 518,
            start: 26.0,
            end: 65,
          }
        ]
      },
      editItem (item) {
        this.editedIndex = this.schedules.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.schedules.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.schedules.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.schedules[this.editedIndex], this.editedItem)
        } else {
          this.schedules.push(this.editedItem)
        }
        this.close()
      }
    }
}
</script>

<style>
#history #content{
    margin-top: 2%;
}
</style>
