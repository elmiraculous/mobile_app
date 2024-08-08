<template>
  <ion-card>
    <ion-card-header class="time">
      <button><img src="assets/images/Frame.svg"></button>
      <h6>Статистика за неделю</h6>
      <button><img src="assets/images/Frame (1).svg"></button>
    </ion-card-header>
    <ion-card-content class="card__content">
      <ion-card>
        4 опозданий
      </ion-card>
      <ion-card>
        7 августа
      </ion-card>
      <ion-card>
        48 минут
      </ion-card>
    </ion-card-content>
  </ion-card>

</template>

<script setup>
import {IonCard, IonCardHeader,IonCardContent } from '@ionic/vue';

</script>

<style scoped lang="scss">
.time{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card__content{
  display: flex;
  flex-direction: row;
}

</style>