<template>
  <div id="sidebar">
    <v-navigation-drawer permanent style="background-color: #333">
      <v-toolbar>
        <v-list id="sidebar-title">
          <v-list-tile>
            <v-list-tile-title class="title whiteText">Admin Panel Sportify</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <div class="sidebar-content">
        <div id="sidebar-profile">
          <img src="../assets/logo.png" alt="profilePicture" id="sidebar-profilePicture">
          <div id="sidebar-profileContent">
            <div id="sidebar-name">
              <p class="whiteText">Kevin Hadinata</p>
            </div>
            <div id="sidebar-location">
              <img src="../assets/133-pin.svg" id="sidebar-iconLocation">
              <p class="whiteText" id="sidebar-locationtext">Jakarta</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sidebar-menu">
        <div id="sidebar-menuBorder">
          <p id="sidebar-menuBordertext">Main Menu</p>
        </div>
        <div id="sidebar-menuContent">
          <div>
            <v-list class="padding0">
              <router-link v-for="item in items" :key="item.title" :to="item.link" tag="v-list-tile" active-class="active" class="padding0 sidebar-menuItem" exact>
                <v-list-tile-content >
                  <v-list-tile-title>
                    <p class="whiteText">{{item.title}}</p>
                  </v-list-tile-title>
                </v-list-tile-content>
              </router-link>
            </v-list>
          </div>
          <div id="sidebar-create">
            <router-link
              id="sidebar-createCourt"
              to="/court/create"
              tag="div"
              active-class="active"
            >
              <p class="whiteText">Create Court</p>
            </router-link>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Overview", link: "/" },
        { title: "Sales History", link: "/history" },
        { title: "My Court", link: "/court" },
        { title: "My Promo", link: "/promo" },
        { title: "My Schedule", link: "/schedule" },
      ]
    };
  }
};
</script>

<style>
#sidebar {
  width: 30vh;
  height: 100vh;
}
#sidebar-title {
  background-color: #367fa9;
  height: 100%;
  text-align: center;
}
#sidebar-profile {
  height: 8%;
  margin: 1vh;
  display: flex;
}
#sidebar-profilePicture {
  width: 3.9rem;
  height: 3.9rem;
  border-radius: 100%;
}
#sidebar-profileContent {
  flex: 1;
  padding: 2%;
  padding-left: 10%;
}
#sidebar-name,
#sidebar-name p {
  font-size: 1rem;
  margin: 0;
}
#sidebar-location {
  margin-top: 2%;
  display: flex;
}
#sidebar-iconLocation {
  width: 1.5rem;
  height: 1.5rem;
}
#sidebar-locationtext {
  flex: 1;
  margin-left: 3%;
}
#sidebar-menu {
  height: 75%;
}
#sidebar-menuBorder {
  color: #4b646f;
  background-color: #1a2226;
  height: 5vh;
  padding: 4%;
  padding-left: 8%;
  font-size: 1rem;
}
#sidebar-menuContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95%;
}
#sidebar-create, #sidebar-create p{
    padding: 3%;
    background-color: green;
    font-size: 1rem;
    margin: 0;
}


.sidebar-menuItem:hover {
  background-color: #1a2226;
}
.sidebar-menuItem.active {
  background-color: #1a2226;
  border-left-color: #3c8dbc;
  border-left-style: solid;
  border-left-width: 1%;
}

.whiteText {
  color: white;
}
.padding0{
    padding: 0%;
}
</style>

