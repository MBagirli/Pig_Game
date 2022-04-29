let img = document.querySelector('.container__img');
let roll__dice = document.querySelector('.container__btn--2');
let hold = document.querySelector('.container__btn--3');
let new__game = document.querySelector('.container__btn--1');
let players = document.querySelectorAll('.container__player');
let first__player__actual__score = document.querySelector('.container__player__p--1');
let second__player__actual__score = document.querySelector('.container__player__p--2');
let first__player__current = document.querySelector('.container__player__results__p--1');
let second__player__current = document.querySelector('.container__player__results__p--2');
let player1 = document.querySelector('.container__player--1');
let player2 = document.querySelector('.container__player--2');
let player__count = 0;
let first__player__score = 0;
let second__player__score = 0;

roll__dice.addEventListener('click', function () {
  let random__number = Math.ceil(Math.random() * 6);
  if (player__count == 0) {
    First__Person(random__number);
  } else {
    Second__Person(random__number);
  }
});

hold.addEventListener('click', function () {
  if (player__count == 0) {
    if (first__player__current.textContent >= 100) {
      first__player__actual__score.textContent++;
      resetting1();

    } else {
      players.forEach(function (element) {
        element.classList.toggle('container__player--order');
      });
      player__count++;
    }
  } else {
    if (second__player__current.textContent >= 100) {
      second__player__actual__score.textContent++;
      resetting2();
    } else {
      players.forEach(function (element) {
        element.classList.toggle('container__player--order');
      });
      player__count = 0;
    }
  }
});

new__game.addEventListener('click', function () {
  player__count = 0;
  first__player__score = 0;
  second__player__score = 0;
  img.style.backgroundImage = "";
  player__count = 0;
  document.querySelectorAll('.container__player__p').forEach(function (element) {
    element.textContent = 0;
  });
  document.querySelectorAll('.container__player__results__p').forEach(function (element) {
    element.textContent = 0;
  });
  if (!player1.classList.contains('container__player--order')) {
    player1.classList.add('container__player--order');
  }
  if (player2.classList.contains('container__player--order')) {
    player2.classList.remove('container__player--order');
  }
});

function First__Person(random__number) {
  switch (random__number) {
    case 1:
      img.style.backgroundImage = "url('img/dice-1.png')";
      players.forEach(function (element) {
        element.classList.toggle('container__player--order');
      });
      first__player__score = 0;
      first__player__current.textContent = first__player__score;
      player__count++;
      break;
    case 2:
      img.style.backgroundImage = "url('img/dice-2.png')";
      First__Person__Score(random__number);
      break;
    case 3:
      img.style.backgroundImage = "url('img/dice-3.png')";
      First__Person__Score(random__number);
      break;
    case 4:
      img.style.backgroundImage = "url('img/dice-4.png')";
      First__Person__Score(random__number);
      break;
    case 5:
      img.style.backgroundImage = "url('img/dice-5.png')";
      First__Person__Score(random__number);
      break;
    case 6:
      img.style.backgroundImage = "url('img/dice-6.png')";
      First__Person__Score(random__number);
      break;
  }
}

function First__Person__Score(random__number) {
  first__player__score += random__number;
  first__player__current.textContent = first__player__score;
}

function Second__Person(random__number) {
  switch (random__number) {
    case 1:
      img.style.backgroundImage = "url('img/dice-1.png')";
      players.forEach(function (element) {
        element.classList.toggle('container__player--order');
      });
      second__player__score = 0;
      second__player__current.textContent = second__player__score;
      player__count = 0;
      break;
    case 2:
      img.style.backgroundImage = "url('img/dice-2.png')";
      Second__Person__Score(random__number);
      break;
    case 3:
      img.style.backgroundImage = "url('img/dice-3.png')";
      Second__Person__Score(random__number);
      break;
    case 4:
      img.style.backgroundImage = "url('img/dice-4.png')";
      Second__Person__Score(random__number);
      break;
    case 5:
      img.style.backgroundImage = "url('img/dice-5.png')";
      Second__Person__Score(random__number);
      break;
    case 6:
      img.style.backgroundImage = "url('img/dice-6.png')";
      Second__Person__Score(random__number);
      break;
  }
}

function Second__Person__Score(random__number) {
  second__player__score += random__number;
  second__player__current.textContent = second__player__score;
}

function resetting1() {
  player__count = 0;
  first__player__score = 0;
  second__player__score = 0;
  img.style.backgroundImage = "";
  player__count = 0;
  document.querySelectorAll('.container__player__results__p').forEach(function (element) {
    element.textContent = 0;
  });
  if (!player1.classList.contains('container__player--order')) {
    player1.classList.add('container__player--order');
  }
  if (player2.classList.contains('container__player--order')) {
    player2.classList.remove('container__player--order');
  }
}

function resetting2() {
  player__count = 0;
  first__player__score = 0;
  second__player__score = 0;
  img.style.backgroundImage = "";
  player__count = 1;
  document.querySelectorAll('.container__player__results__p').forEach(function (element) {
    element.textContent = 0;
  });
  if (player1.classList.contains('container__player--order')) {
    player1.classList.add('container__player--order');
  }
  if (!player2.classList.contains('container__player--order')) {
    player2.classList.remove('container__player--order');
  }
}
