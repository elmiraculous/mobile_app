<template>
  <ion-page>
    <ion-list>
        <ion-input type="text" placeholder="Логин"></ion-input>
        <ion-input type="password" placeholder="Пароль"></ion-input>
        <ion-button class="btn">Вход</ion-button>
         <button class="btn">Вход</button>
    </ion-list>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput, IonList, IonButton   } from '@ionic/vue';

</script>

<style scoped>
.btn{
  background: red;
}
</style>
