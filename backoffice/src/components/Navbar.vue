<template>
    <div id="navbar">
        <div id="navbar-logout">
            <img src="../assets/009-logout.svg" id="navbar-iconLogout">
            <p class="whiteText" id="navbar-logouttext">LogOut</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    #navbar{
        width: 83.8vw;
        height: 8.1vh;
        background-color: #3c8dbc;
        display: flex;
        justify-content: flex-end;
    }
    #navbar-logout{
        background-color: #dd4b39;
        width: 10vw;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    #navbar-iconLogout {
    width: 2rem;
    height: 2rem;
    }
    #navbar-logouttext {
    padding-left: 5%;
    margin: 0;
    }
</style>
