<template>
  <h1>How to use / 使い方</h1>

  <section>
    <h2>Setting on OBS / OBSへの設定</h2>
    <p>
      Nothing complicated, just specify it as a normal browser overlay.<br />
      Please add the address for survivor, killer and controller as an
      overlay.<br />
      The recommended width for portrait mode is 150px. It is recommended that
      the height be 800px. It is recommended that the height be 800px.<br />
      It is currently set to portrait mode, but we will add additional CSS for
      landscape mode, so please wait. <br />
      I will add the additional CSS when the specification is finalized.
    </p>

    <p>
      特段難しいことはなく、通常のブラウザオーバーレイとして指定すればOKです。<br />
      サバイバー用のアドレス・キラー用のアドレス・コントローラーのアドレス、それぞれをオーバーレイとして追加してください。
      縦置き時の推奨幅は150pxです。高さは800px取ってあると良いと思います。
      パーク名によっては折り返しが発生し縦に伸びる可能性があります。<br />
      現状は縦置きになっていますが、横置きにしたいときの追加CSSは追記しますので、お待ちください。<br />
      （仕様が確定してから追記します。）
    </p>
  </section>

  <section>
    <h2>To Control / コントローラーの使い方</h2>
    <p>
      Controllers should also be added as an overlay to the OBS. <br />
      This is because the data will be stored in something called local storage,
      which means that the settings will be stored in a separate place from the
      normal browser. <br />
      In order to share the information on each page, they should both be
      displayed in the same OBS. <br />
      The controller overlay should be placed off-screen or hidden. <br />
      Select the controller's layer and use "Dialogue" to control it. The reason
      it is on a separate page is that we could not successfully hide the
      selection screen that appears when doing this.
    </p>

    <p>
      コントローラーもOBSのオーバーレイとして追加してください。<br />
      これはデータをローカルストレージというものに保存するためで、
      通常のブラウザとは別の所に設定が保存されるようになります。<br />
      各ページの情報を共有するために、これらは両方とも同じOBSの中で表示させる必要があります。<br />
      コントローラーのオーバーレイは画面外に配置するか、非表示にしておきましょう。<br />
      コントローラーのレイヤーを選択して「対話」を利用すると、操作が可能です。
      別のページにしているのは、このときに表示される選択画面が上手く隠せなかったためです。
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 90%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  p {
    text-align: left;
  }
}
</style>