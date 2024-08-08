<template>
  <ion-header class="top">
    <div class="top__exit">
      <h2>Иванов Иван Иванович</h2>
      <img src="assets\images\Group (1).svg" alt="">
    </div>

    <div class="top__meet">
      <h6>Последнее посещение:</h6>
      <h6>сегодня</h6>
      <h6>10:06</h6>
    </div>
    <div class="top__scan">
      <div class="top__scan__fire">
        <h6>июнь</h6>
        <img class="fire-img" src="assets\images\8973099 2.png" alt="fire">
      </div>
      <div><ion-button>Сканировать qr код</ion-button></div>

    </div>
  </ion-header>
</template>

<script setup>

import {IonButton, IonHeader} from "@ionic/vue";

</script>


<style scoped lang="scss">
.top{
  background: linear-gradient(
          to bottom,
          #2e5e7e 0%,
          #55b3f3 78%);
  color:white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  &__exit{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
  }
  &__meet{
    display: flex;
  }
  &__scan{
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    &__fire{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

}
.fire-img{
  width: 80px;
}

</style>