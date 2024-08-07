<template>
    <ion-page class="content">
      <h1>Добро пожаловать</h1>
      <ion-img 
        src="/assets/images/hand-drawn-comfort-zone-illustration 1 (1).jpg"
        alt="добро пожаловать картинка"
        class="img">
      </ion-img>
        <ion-input v-model="username" class="custom_input" type="text" placeholder="Логин"></ion-input>
        <ion-input v-model="password" class="custom_input" type="password" placeholder="Пароль">
            <ion-input-password-toggle slot="end"></ion-input-password-toggle>
        </ion-input>
        <ion-button class="btn" @click="login">Вход</ion-button>
        <div class="content__type">
          <!-- <ion-item>
            <ion-checkbox></ion-checkbox>
            <ion-label>Checkbox Label</ion-label>
          </ion-item> -->
          <ion-checkbox class="label" label-placement="end">Запомнить меня</ion-checkbox>
          <button>Сбросить пароль</button>
        </div>

      </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonInput, IonButton, IonInputPasswordToggle, IonImg, IonCheckbox, IonPage } from '@ionic/vue';

const router = useRouter();
const username = ref('');
const password = ref('');

function login() {
  if (username.value && password.value) {
    router.push('/home');
  } else {
    alert('Пожалуйста, введите логин и пароль');
  }
}
</script>

<style scoped lang="scss">
.img{
  width: 50%;
}
.content{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__type{
    color: #828080;
    width: 80%;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    align-items: center;
    justify-content: space-between;

  }
}
.btn{
  --background: #77C6FC;
  width: 80%;
  height: 40px;
  margin: 15px 0;
  --border-radius: 10px;

}
.custom_input{
  width: 80%;
  height: 44x;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  margin: 12px 0;
  --padding-start: 15px;
  --padding-end: 10px;
  
}
ion-checkbox {
  --checkmark-color: #77C6FC;
  --checkmark-width: 3px;
  --checkbox-background-checked: white;
  font-size: 14px;
  margin-right: 8px;
}
ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #D9D9D9;
}

</style>
