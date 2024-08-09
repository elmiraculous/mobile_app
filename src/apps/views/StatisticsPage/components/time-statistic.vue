<template>
  <ion-card mode="ios">
    <ion-card-header class="time">
      <button><img src="@images/Frame.svg" alt="left"></button>
      <h6>Статистика за неделю</h6>
      <button><img src="@images/Frame (1).svg" alt="right"></button>
    </ion-card-header>
    <ion-card-content class="card__content">
      <ion-grid>
        <ion-row>
          <ion-col><h1>4</h1>опозданий</ion-col>
          <ion-col size="auto"><h1>7 августа</h1></ion-col>
          <ion-col><h1>48</h1> минут</ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>

</template>

<script setup>
import {IonCard, IonCardHeader,IonCardContent,IonGrid,IonCol,IonRow } from '@ionic/vue';
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
ion-grid{
  display: flex;
  text-align: center;
  justify-content: space-around;

}
ion-row{
  width: 100%;
  align-items: center;
}
ion-col:not(:last-child) {
  margin-right: 10px;
}

</style>