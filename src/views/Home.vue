<template>
  <div class="home">
    <img alt="Icon" src="../assets/perks/perkbase/blank.png" />
    <HelloWorld msg="Welcome to DbD Perks Overlay" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home {
  img {
    width: 80%;
    max-width: 300px;
  }
}
</style>