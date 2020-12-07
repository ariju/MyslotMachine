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
// getRandomImageメソッドにimagesを定義して
// その中に配列として画像を入れてランダムに選んだ要素を返す
    getRandomImage() {
      const images = [
        'img/seven.png',
        'img/bell.png',
        'img/cherry.png',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }
// spinメソッドの定義。画像を設定
// getRandomImageメソッドにまとめる
    spin() {
      this.img.src = this.getRandomImage();
    }
  }

// インスタンスの生成
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];
// spinをクリックした時の処理
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
// パネルの画像を切り替える一つ一つの要素をpanelで受け取って次の処理をする
// panelクラスのspinメソッドにまとめる
    panels.forEach(panel => {
      panel.spin();
    });
  });
}