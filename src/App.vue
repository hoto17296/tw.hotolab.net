<template>
  <div>
    <div class="ui menu">
      <div class="ui container" style="max-width: 800px">
        <div class="item">tw</div>
        <a href="/signin" class="item">Signin</a>
        <a href="/signup" class="item">Signup</a>
      </div>
    </div>
    <main class="ui container" style="max-width: 800px">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
