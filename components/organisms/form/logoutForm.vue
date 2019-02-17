<template>
  <div>
    <CommonAlert
      alertMessage="ログアウトしました"
      alertType="success"
      hideCloseBtn
    />
    <DarkBackCard>
      <v-layout slot="actions">
          <PrimaryBtn to="/login">
            ログイン画面へ
          </PrimaryBtn>
          <v-spacer/>
          <SecondaryBtn
            to="/signup">
            アカウントが無い方はこちら
          </SecondaryBtn>
      </v-layout>
    </DarkBackCard>
  </div>
</template>

<script>
  import PrimaryBtn from '~/components/atoms/buttons/primaryButton';
  import SecondaryBtn from '~/components/atoms/buttons/secondaryButton';
  import CommonAlert from '~/components/molecules/alert/commonAlert';
  import DarkBackCard from '~/components/molecules/cards/darkBackCard';

  export default {
    components: {
      'CommonAlert': CommonAlert,
      'DarkBackCard': DarkBackCard,
      'PrimaryBtn': PrimaryBtn,
      'SecondaryBtn': SecondaryBtn,
    },
  }
</script>

<style>
</style>
