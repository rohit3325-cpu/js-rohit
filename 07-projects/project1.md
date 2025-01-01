# Projects related to DOM


## Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project1
```javascipt
console.log("Rohit")
const buttons =document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
     body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
     }
  });
});
```

## project 2 solution of BMI
```javascript
const form = document.querySelector('form');
// this usecase will give us empty
// const height = parseInt(document.querySelector('#height').value)

// when form is submit it submit as get type or post type and value goes to server and we have to stop that event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi <18.6){
      coment.innerHTML = " Under weight"
    }
    if(bmi >18.6 && bmi<24.9){
      coment.innerHTML = " Normal Range "
    }
    if(bmi >24.9){
      coment.innerHTML = "Overweight "
    }
  }
});
```

## project 3 solution 

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('clock')

let date = new Date();
console.log(date.toLocaleTimeString());


setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## project 4 solution
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter valid message')
}else if(guess<1){
  alert('please enter a number greater than 1')
}else  if(guess>100){
  alert('please enter a number less than 100')
}else{
    prevGuess.push(guess);
     if(numGuess === 11){
       displayGuess(guess);
       displayGuess(`Game over. Random number was ${randomNumber}`);
       endGame();
     }else{
       displayGuess(guess);
       checkGuess(guess);
     }
 }
}

function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage(`you guessed it right`)
      endgame();
    }
    else if(guess<randomNumber){
      displayMessage(`Number is too low`);
    }
    else if(guess > randomNumber){
      displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
      lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```