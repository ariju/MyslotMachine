'use strict';

{
// htmlと同様に要素を作る
  class Panel {
// コンストラクタで要素の生成
    constructor() {
// sectionはここのクラスだけで使用するから定数で
// imgとstopは他のクラスでも使用するからthis
      const section = document.createElement('section');
      section.classList.add('panel');
// img要素を作ってsrc属性にimg/seven.pngとする
      this.img = document.createElement('img');
      this.img.src = 'img/seven.png';
// div要素を作ってstopを表示stopクラスにstopを追加する
      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
// imgとstopをsectionの子要素として追加
      section.appendChild(this.img);
      section.appendChild(this.stop);
// sectionをmainに追加
      const main = document.querySelector('main');
      main.appendChild(section);
    }
  }

// インスタンスの生成
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];
}