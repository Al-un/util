<template>
  <div id="main-container">
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
      <div class="container">
        <!-- Brand -->
        <router-link :to="{name: 'root'}" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation-->
        <div id="navbarNav" class="collapse navbar-collapse">
          <!-- Navigation-->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{name: 'calc'}" class="nav-link">Calculator</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "layout"
};
</script>

<style>
</style>
