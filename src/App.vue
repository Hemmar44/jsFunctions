<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/map">Map</router-link> |
      <router-link to="/reduce">Reduce</router-link> |
    </div>
    <router-view/>
  </div>
</template>
<style>
  .extra-space {
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
