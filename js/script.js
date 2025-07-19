const images = [
  {
    src: "images/uminagomi_dish1.jpg",
    class: "uminagomi_pict",
    caption: '<a href="uminagomi.html" style="color:#fff;">かき氷専門店ウミナゴミ</a>'
  },
  {
    src: "images/uminagomi_dish3.jpg",
    class: "uminagomi_pict",
    caption: '<a href="uminagomi.html" style="color:#fff;">かき氷専門店ウミナゴミ</a>'
  },
  {
    src: "images/wonder_dish_1.jpg",
    class: "wonder_pict",
    caption: '<a href="wonder.html" style="color:#fff;">Cafe WONDER</a>'
  },
  {
    src: "images/wonder_dish_2.jpg",
    class: "wonder_pict",
    caption: '<a href="wonder.html" style="color:#fff;">Cafe WONDER</a>'
  },
  {
    src: "images/wonder_dish_3.jpg",
    class: "wonder_pict",
    caption: '<a href="wonder.html" style="color:#fff;">Cafe WONDER</a>'
  },
  {
    src: "images/motitsuki_dish_1.jpg",
    class: "motitsuki_pict",
    caption: '<a href="motituki.html" style="color:#fff;">茶房 もちつき庵</a>'
  },
  {
    src: "images/motitsuki_dish_2.jpg",
    class: "motitsuki_pict",
    caption: '<a href="motituki.html" style="color:#fff;">茶房 もちつき庵</a>'
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