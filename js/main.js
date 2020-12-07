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
// リロードする度に画像が変わる
      this.img.src = this.getRandomImage();
// timeoutIdプロパティを初期化最初は値が定まってないからundefined
      this.timeoutId = undefined;

// div要素を作ってstopを表示stopクラスにstopを追加する
      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
// stopボタンをクリックした時の処理
      this.stop.addEventListener('click', () => {
        clearTimeout(this.timeoutId);
      });

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
// setTimeoutを使って50ミリ秒後にspinメソッドを繰り返す      
// timeoutIdプロパティをsetTimeoutの返り値にする
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
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