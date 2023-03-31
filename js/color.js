const playLink = document.querySelector('.play-link'); // выбираем элемент play-link

let hue = 0; // начальное значение цвета

function changeColor() {
  hue++; // увеличиваем значение цвета
  if (hue > 360) { // если значение цвета превышает 360, возвращаем его к 0
    hue = 0;
  }
  const color = `hsl(${hue}, 100%, 50%)`; // создаем цвет в формате HSL
  playLink.style.color = color; // применяем цвет к элементу
}

setInterval(changeColor, 50); // вызываем функцию changeColor каждые 50 миллисекунд
