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
        if (this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

// stopボタンを押す度に1減らす
        panelsLeft--;

// panelsLeftが0になった時に結果の判定
        if (panelsLeft === 0) {
          checkResult();
        }
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

// 比較するパネルはp1とp2で受け取る
    isUnmatched(p1, p2) {
// イメージのソース属性が他の２つの異なっている場合はtrueを返してそうでない場合はfalseを返す
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

// unmatch()メソッドthis.imgに対してunmatchedクラスをつける
    unmatch() {
      this.img.classList.add('unmatched');
    }
  }

// 個々のパネルに関する処理ではなくパネル同士を比較する処理
// だからパネルクラスの外で書く
  function checkResult() {
// panels0が他の2つとマッチしなかった場合はunmatch()メソッドを
// 呼び出して色を薄くする
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
  }

// インスタンスの生成
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

// 後幾つ動いているパネルが残っているか変数で保持
  let panelsLeft = 3;

// spinをクリックした時の処理
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
// inactiveクラスが着いていたらreturnで処理を止める
    if (spin.classList.contains('inactive')) {
      return;
    }
  spin.classList.add('inactive');
// パネルの画像を切り替える一つ一つの要素をpanelで受け取って次の処理をする
// panelクラスのspinメソッドにまとめる
    panels.forEach(panel => {
      panel.spin();
    });
  });
}