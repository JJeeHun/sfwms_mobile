<template>
  <div id="container">
    <div class="box">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  justify-content: center;
  
  width: 100vw;
  height: 100vh;  
}
.box {
  display: flex;
  align-items: center;
  flex-direction: column;  
}
</style>
