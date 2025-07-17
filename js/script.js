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
  }
];
let current = 0;
const visual = document.querySelector('.main-visual img');
const caption = document.querySelector('.main-visual-caption');
function updateVisual() {
  visual.src = images[current].src;
  visual.className = images[current].class;
  caption.innerHTML = images[current].caption;
}
setInterval(() => {
  current = (current + 1) % images.length;
  updateVisual();
}, 4000);
updateVisual();