<template>
    <ion-page>
      <header-card/>
      <ion-content  class="content">
        <time-statistic/>
        <calendar/>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage } from '@ionic/vue';
  import HeaderCard from "@/apps/views/StatisticsPage/components/header-card.vue";
  import TimeStatistic from "@/apps/views/StatisticsPage/components/time-statistic.vue";
  import Calendar from "@/apps/views/StatisticsPage/components/calendar/CustomCalendar.vue";

  </script>
  
  <style scoped lang="scss">

  </style>
  