#Projects related to DOM


##Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##project1
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

##project 2 solution of BMI
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