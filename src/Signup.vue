<template>
  <form class="ui large form">
    <h2>Sign Up</h2>
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
    <div class="ui large primary button">Sign Up</div>
  </form>
</template>

<script>
export default {
  name: 'signup',
}
</script>
