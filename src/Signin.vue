<template>
  <div class="ui container" style="max-width: 800px">
    <form class="ui large form">
      <h2>Sign In</h2>
      <div class="field">
        <div class="ui left icon input">
          <i class="user icon"></i>
          <input type="text" name="email" placeholder="E-mail address">
        </div>
      </div>
      <div class="field">
        <div class="ui left icon input">
          <i class="lock icon"></i>
          <input type="password" name="password" placeholder="Password">
        </div>
      </div>
      <div class="ui large primary button">Sign In</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signin',
}
</script>
