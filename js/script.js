document.addEventListener('DOMContentLoaded', function() {
  // 画像スライダーの設定
  const images = [
    {
      src: "images/uminagomi_dish1.jpg",
      class: "sweets1",
      caption: '<a href="uminagomi.html" style="color:#fff;">かき氷専門店ウミナゴミ</a>'
    },  // 2枚目の画像はアップ過ぎて使えなかったため削除
    {
      src: "images/uminagomi_dish3.jpg",
      class: "sweets3",
      caption: '<a href="uminagomi.html" style="color:#fff;">かき氷専門店ウミナゴミ</a>'
    },
    {
      src: "images/wonder_dish_1.jpg",
      class: "sweets4",
      caption: '<a href="wonder.html" style="color:#fff;">Cafe WONDER</a>'
    },
    {
      src: "images/wonder_dish_2.jpg",
      class: "sweets5",
      caption: '<a href="wonder.html" style="color:#fff;">Cafe WONDER</a>'
    },
    {
      src: "images/wonder_dish_3.jpg",
      class: "sweets6",
      caption: '<a href="wonder.html" style="color:#fff;">Cafe WONDER</a>'
    },
    {
      src: "images/motitsuki_dish_1.jpg",
      class: "sweets7",
      caption: '<a href="motituki.html" style="color:#fff;">茶房 もちつき庵</a>'
    },
    {
      src: "images/motitsuki_dish_2.jpg",
      class: "sweets8",
      caption: '<a href="motituki.html" style="color:#fff;">茶房 もちつき庵</a>'
    },
    {
      src: "images/motitsuki_dish_3.jpg",
      class: "sweets9",
      caption: '<a href="motituki.html" style="color:#fff;">茶房 もちつき庵</a>'
    },
    {
      src: "images/農ブランド_dish1.jpg",
      class: "sweets10",
      caption: '<a href="noubland.html" style="color:#fff;">農ブランド 本店</a>'
    },
    {
      src: "images/農ブランド_dish2.jpg",
      class: "sweets11",
      caption: '<a href="noubland.html" style="color:#fff;">農ブランド 本店</a>'
    },
    {
      src: "images/農ブランド_dish3.jpg",
      class: "sweets12",
      caption: '<a href="noubland.html" style="color:#fff;">農ブランド 本店</a>'
    }
  ];

  let current = 0;
  const visual = document.querySelector('.main-visual img');
  const caption = document.querySelector('.main-visual-caption');
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');

  // 画像スライダーの機能が存在する場合のみ実行
  if (visual && caption && leftBtn && rightBtn) {
    // 横スライドアニメーション
    function slideToNext(nextIndex, direction = 1) {
      visual.style.transition = "transform 0.6s, opacity 0.6s";
      visual.style.transform = `translateX(${direction * 100}%)`;
      visual.style.opacity = "0";
      setTimeout(() => {
        current = nextIndex;
        visual.src = images[current].src;
        visual.className = images[current].class;
        caption.innerHTML = images[current].caption;
        visual.style.transition = "none";
        visual.style.transform = `translateX(${-direction * 100}%)`;
        setTimeout(() => {
          visual.style.transition = "transform 0.6s, opacity 0.6s";
          visual.style.transform = "translateX(0)";
          visual.style.opacity = "1";
        }, 30);
      }, 600);
    }

    // 左右ボタン
    leftBtn.addEventListener('click', () => {
      // 左ボタンで右方向にスライド
      slideToNext((current - 1 + images.length) % images.length, 1);
    });
    rightBtn.addEventListener('click', () => {
      // 右ボタンで左方向にスライド
      slideToNext((current + 1) % images.length, -1);
    });

    // 自動切り替え
    let timer = setInterval(() => {
      slideToNext((current + 1) % images.length, -1);
    }, 5000);

    // ボタン操作時は自動切り替えをリセット
    [leftBtn, rightBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(timer);
        timer = setInterval(() => {
          slideToNext((current + 1) % images.length, -1);
        }, 5000);
      });
    });

    // 初期表示
    visual.src = images[current].src;
    visual.className = images[current].class;
    caption.innerHTML = images[current].caption;
    visual.style.transform = "translateX(0)";
    visual.style.opacity = "1";
  }

  // ハンバーガーメニューの機能
  const floatingMenu = document.querySelector('.floating-menu');
  const floatingBtn = document.getElementById('floating-menu-toggle');
  const floatingList = document.querySelector('.floating-list');

  if (floatingBtn) {
    console.log('ハンバーガーメニューボタンが見つかりました');
    floatingBtn.addEventListener('click', function(e) {
      console.log('ハンバーガーメニューがクリックされました');
      e.stopPropagation();
      floatingMenu.classList.toggle('open');
    });
    
    // メニュー外クリックで閉じる
    document.addEventListener('click', function(e) {
      if (!floatingMenu.contains(e.target)) {
        floatingMenu.classList.remove('open');
      }
    });
    
    // メニュー内クリックは閉じない
    if (floatingList) {
      floatingList.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  } else {
    console.log('ハンバーガーメニューボタンが見つかりません');
  }
});