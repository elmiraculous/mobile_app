<template>
  <ion-page>
    <ion-header class="name">
      <h1>Иванов Иван Иванович</h1>
    </ion-header>
    <div class="content">
      <ion-button class="btn__scan" @click="goToScan">Сканирование</ion-button>
      <ion-button class="btn__statistics"  @click="goToStatistics">Статистика</ion-button>
    </div>
</ion-page>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { IonButton, IonPage } from '@ionic/vue';

const router = useRouter();

function goToStatistics() {
  router.push('/statistics');
}
function goToScan() {
  router.push('/scan');
}
</script>

<style scoped lang="scss">
.name{
  background: linear-gradient(
  to bottom, 
  #2e5e7e -60%, 
  #55b3f3 78%);
  color: white;

}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.btn__statistics{
  --background: #FEC569;
}
ion-button{
  --background: #77C6FC;
  width: 70%;
  height: 50px;
  margin: 15px 0;
  --border-radius: 10px;
  font-size: 26px;
}
</style>
