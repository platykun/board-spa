<template>
  <div class="record">
    <div class="flex xs10 offset-xs1 sm6 offset-sm3 mt-3">
      <h1>チュートリアル</h1>
      このチュートリアルはサイドメニューからいつでも見返すことができます
      <div class="mt-3">
        <h2 class="body--left--accent">まずやること</h2>
      </div>
      <div class="mt-3">
        <h3>プロフィールを編集してみましょう</h3>
        <p>
          右上のアイコンからプロフィールの編集画面を開くことができます。
        </p>
        <p>
          以下を設定することができます。
        </p>
        <ul>
          <li>アイコン</li>
          <li>password(実装予定)</li>
          <li>ユーザ名(実装予定)</li>
        </ul>
      </div>
      <div class="mt-3">
        <h3>他のユーザの記録を見てみましょう</h3>
        <p>画面下のタブバーの「top」ボタンから記録を見ることができます。</p>
      </div>
      <v-divider/>
      <div class="mt-3">
        <h2 class="body--left--accent">ボードゲームで遊ぶときにやること</h2>
      </div>
      <div class="mt-3">
        <h3>チェックインしましょう</h3>
        <p>
          画面下のタブバーの「checkin」ボタンからチェックインすることができます。
        </p>
      </div>
      <div class="mt-3">
        <h3>結果を記録しましょう</h3>
        <p>
          画面下のタブバーの「record」ボタンから記録することができます。
        </p>
        <ul>
          <li>チェックイン済の場合、場所が自動入力されます</li>
          <li>遊んだボードゲーム、プレイヤーごとのスコアを記録できます</li>
        </ul>
      </div>
      <div class="mt-3">
        <h3>他のユーザーと共有しましょう</h3>
        <p>
          画面下のタブバーの「tweet」ボタンからツイートすることができます。
        </p>
        <p>
          ツイートする内容を選択してツイートボタンを押してください。
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {};
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
