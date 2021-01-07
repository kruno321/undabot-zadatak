<template>
  <div class="home">
    <h2>This is a home page</h2>
    <img class="mt-8 mb-8" alt="logo" src="../assets/logo_blue.svg" />
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis
      deleniti dignissimos dolorem eligendi est expedita in ipsam magnam, nam
      obcaecati, omnis optio porro quaerat quia, suscipit vel vero voluptatibus.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text{
  max-width: 600px;
  text-align: center;
}
</style>
