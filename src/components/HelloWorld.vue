<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This is just show the perks you use for audience.</p>
    <section>
      <h2>Overlay & Contoller URL</h2>
      <p>
        <router-link to="./survivors">
          Overlay for Survivors is here / サバイバー用オーバーレイはこちら
        </router-link>
      </p>
      <p>
        <router-link to="./killers">
          Overlay for Killers is here / キラー用オーバーレイはこちら
        </router-link>
      </p>
      <p>
        <router-link to="./ctrl">
          Overlay Controller is here / オーバーレイの設定画面はこちら
        </router-link>
      </p>
    </section>
    <section>
      <h2>[JP] オーバーレイについて</h2>
      <p>
        このオーバーレイは、今使っているパークをオーバーレイで表示するために作られました。<br />
        機能は随時追加される可能性があります。表示が変わってしまったときなどは必要に応じてこのページを確認して、対処法などをご確認ください。
      </p>
    </section>
    <section>
      <h2>[EN] About this overlay</h2>
      <p>
        This overlay was created to show the current park you are using as an
        overlay. <br />
        Functions may be added at any time. If the display changes, please check
        this page as necessary to find out how to fix the problem.
      </p>
    </section>
    <section>
      <h2>How to use / 使い方</h2>
      <p>
        <router-link to="./howto">
          Guide for this overlay. / 使い方はこちら
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
