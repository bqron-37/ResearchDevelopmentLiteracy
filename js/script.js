const images = [
  {
    src: "images/uminagomi_dish1.jpg",
    class: "sweets1",
    caption: '<a href="uminagomi.html" style="color:#fff;">かき氷専門店ウミナゴミ</a>'
  },
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
  }
];

let current = 0;
const visual = document.querySelector('.main-visual img');
const caption = document.querySelector('.main-visual-caption');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

function slideToNext(nextIndex) {
  // 画像を右へスライドして消す
  visual.style.transform = "translateX(100vw)";
  visual.style.opacity = "0";
  setTimeout(() => {
    // 新しい画像を左から表示
    current = nextIndex;
    visual.src = images[current].src;
    visual.className = images[current].class;
    caption.innerHTML = images[current].caption;
    visual.style.transform = "translateX(-100vw)";
    visual.style.opacity = "0";
    setTimeout(() => {
      visual.style.transform = "translateX(0)";
      visual.style.opacity = "1";
    }, 30); // 少し待ってから戻す
  }, 800); // transitionと同じ時間
}

leftBtn.addEventListener('click', () => {
  slideToNext((current - 1 + images.length) % images.length);
});
rightBtn.addEventListener('click', () => {
  slideToNext((current + 1) % images.length);
});

// 自動切り替え
let timer = setInterval(() => {
  slideToNext((current + 1) % images.length);
}, 7000);

// ボタン操作時は自動切り替えをリセット
[leftBtn, rightBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      slideToNext((current + 1) % images.length);
    }, 7000);
  });
});

// 初期表示
visual.style.transform = "translateX(0)";
visual.style.opacity = "1";
visual.src = images[current].src;
visual.className = images[current].class;
caption.innerHTML = images[current].caption;

updateVisual();