<template>
  <ion-card class="calendar"
  mode="ios">
    <ion-datetime :first-day-of-week="1"
                  :presentation="'date'"
                  mode="md"
                  :readonly="true"
                  :size="'cover'"
    ></ion-datetime>
  </ion-card>

</template>

<script setup>
import {IonCard, IonDatetime } from "@ionic/vue";

</script>


<style scoped lang="scss">
.calendar{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>