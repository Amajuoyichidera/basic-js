// var name = 'David';
// let age = 20;
// const career = 'Software Engineer';
// // alert(age);
// age = 30;
// // alert(age);
// // alert(career);
// let isGreater = 1 > 5;
// // alert(isGreater);
// let fruits = ['apple','banana','pineapple','guava','orange'];
// // alert(fruits[0]);
// fruits[0] = 'pear';
// fruits[2] = 'carrot';
// fruits[3] = 'cherry';
// fruits[5] = 'lemon';
// alert(fruits.length);

// let user = {
//     myName: 'Amajuoyi Chidera David',
//     myAge: 20,
//     ambition: 'Software Engineer',
//     myEmail: 'amajuoyichideradavid10@gmail.com',
// }
// alert(user.myName);
// user.myAge = 30;
// alert(user.myAge);
let lappy;
// alert(lappy);
let y = null;
// alert(y);
let bigNum = BigInt(12345678901234567890);
// alert(bigNum);
// alert('Hello David');
// let yourAge = prompt('What is your Age', 30);
// alert(`you are ${yourAge} years old`);
// let isBoss = confirm('Are you the boss');
// alert(isBoss);
// alert( 2 + 3 );
// alert(10 - 5);
// alert( 2 * 3);
// alert( 10 / 2);
// alert( 5 % 2 );
// alert(2 ** 2);
// alert(10 ** 5);
let myCon = 'My' + ' ' + 'Name';
// alert(myCon);
// let con2 = 2 + '3' + 3 + 3;
// let con2 = '1' + 2 + 4 + 5;
// alert(con2);
// let con3 = '6' - '5';
// alert(con3);
// let con4 = 10 / '5';
// alert(con4);
// let x = 10;
// alert(x)
let z = 30 + 20;
// alert(z)
let counter = 2;
// counter++;
// counter = counter + 1;
// alert(counter);
let decrease = 5;
// decrease--;
// decrease = decrease - 1;
// alert(decrease);
let n = 5;
// n = n + 3;
// n += 3;
// n = n * 2;
// n *= 2;
n /= 5;
// alert(n);
// alert(10 > 3);
// alert(10 < 5)
// alert( 10 == 10 );
// alert( 5 != 3);
let c = 5 == 4;
// alert(c);
// alert('Z' > 'A');
// alert('Glow' > 'Glee');
// alert('Bee' > 'Be');
// alert('2' > 5);
// alert(true == 1);
// alert(false == 1);
// alert('1' === 1);
// alert(null === undefined);

// let userage = prompt('How old are you?',);
// if(userage < 18) {
//     alert("you're underage and unqualified");
// }else if(userage == 50) {
//     alert("you're welcome my elder");
// }else if(userage == 100) {
//     alert("wow what an unusual age");
// }else {
//     alert("you're qualified and welcomed");
// }


// let year = prompt('What year are we in now?', 2000);
// if(year < 2024) {
//     alert('too late');
// }else if(year > 2024) {
//     alert('too early');
// }else {
//     alert('you are correct')
// }

// let gender = prompt('what is your gender?',);
// let allowed = gender === 'female' ? true : false;
// if(gender === 'female') {
//     allowed = true;
// }else {
//     allowed = false;
// }
// alert(allowed);
// let nationality = prompt('what country are you from?',);
// let message = (nationality === 'nigeria') ? 'you are nigerian' : (nationality === 'canada') ? 'you are canadian' : (nationality === 'america') ? 'you are american' : 'i dont know you';

// alert(true || true);
// alert(false || true);
// alert(false || false);
// alert(false || true || false);

// if(1 || 0) {
//     alert('truthy');
// }

// let hour = prompt('what is hour is it?',);
// if(hour <= 9 || hour >= 11 || hour === 12 || hour === 14) {
//     alert('office is closed');
// }

// alert(true && true);
// alert(false && true);
// alert(false && false);
// let hour = prompt('what hour is it?');
// let minutes = prompt('what minute is it?');
// if(hour < 9 && minutes > 30) {
//     alert('closed for today');
// }

// alert(1 && 2 && 3);
// alert(0 || 1 || 3);
// alert(!true);
// alert(!false);
// alert(!1)

// let myage = prompt('what is your age?');
// if(myage != 30) {
//     alert('welcome');
// }
// let my = 0;
// while(my < 5) {
//     alert(my);
//     my++;
// }

// let name1 = prompt('what is your name?');
// while(!name1) {
//     name1 = prompt('enter your name');
// }
// alert(name1);

// while(1 > 5) {
//     alert('hello world');
// }

// let i = 3;
// while(i != 0) {
//     alert(i);
//     i--;
// }

// let i = 0;
// do {
//     alert(i);
//     i++;    
// } while(i < 3);

// for(let d = 0; d < 5; d++) {
//     alert(d);
// }

// let sum = 0;
// while(true) {
//     let value = +prompt('type a number');
//     if(!value) {
//         break;
//     }
//     sum = sum + value;
// }
// alert(sum);

// for(let m = 0; m < 10; m++) {
//     if(m % 2 == 0) {
//         continue;
//     }
//     alert(m);
// }

// let v = +prompt('enter a number');
// switch(v) {
//     case 1 + 2:
//     case 3 - 1:
//         alert('too small');
//         break;
//     case 10 - 6:
//         alert('you are correct');
//         alert('you are smart');
//         break;
//     case 5:
//         alert('too big');
//         break;
//     default:
//         alert('wrong value');
// }

// if(v === 3) {
//     alert('too small');
// }else if(v === 2) {
//     alert('too small');
// }else if(v === 4) {
//     alert('you are correct');
// }else if(v === 5) {
//     alert('too big');
// }else {
//     alert('wrong value');
// }

// let browser = prompt('what browser are you using?');
// switch(browser) {
//     case 'chrome':
//         alert('you are using chrome');
//         break;
//     case 'firefox':
//         alert('you are using firefox');
//         break;
//     case 'edge':
//         alert('you are using edge');
//         break;
//     case 'opera mini':
//         alert('you are using opera mini');
//         break;
//     case 'sefari':
//         alert('you are using sefari');
//         break;
//     default:
//         alert('i dont know your browser');
// }

// if(browser === 'chrome') {
//     alert('you are using chrome');
// }else if(browser === 'firefox') {
//     alert('you are using firefox');
// }else if(browser === 'edge') {
//     alert('you are using edge');
// }else if(browser === 'opera mini') {
//     alert('you are using opera mini');
// }else if(browser === 'sefari') {
//     alert('you are using sefari');
// }else {
//     alert('i dont know your browser');
// }

// let k = +prompt('enter a number');
// if(k == 1) {
//     alert(1);
// }else if(k == 2) {
//     alert(2);
// }else if(k == 3) {
//     alert(3);
// }else if(k == 4) {
//     alert(4);
// }

// let myOwnUser = 'David';
// function showMessage() {
//     let myOwnUser = 'Clinton';
//     let message = 'Hello world ' + myOwnUser;
//     alert(message);
// }

// showMessage();
// alert(myOwnUser);

// function sendMessage(from, text) {
//     if(text === undefined) {
//         text = 'Hello my guy';
//     }
//     alert(from + ': ' + text);
// }
// sendMessage('Ann', 'How are you?');

// function sum(a) {
//     if(a < 10) {
//         return 'the number u put is less than 10';
//     }else {
//         return 'the number u put is not less than 10';
//     }
// }
// alert(sum(10));
// alert(sum(2,5));
// alert(sum(10, 20));
// function callBoy() {
//     alert('Hello Boy');
//     return 'hi';
// }
// alert(callBoy())

// function min(a, b) {
//     if(a < b) {
//         return a;
//     }else {
//         return b;
//     }
// }

// alert(min(10, 5));

// let sayHi = function() {
//     alert('Hello my guy');
// }

// sayHi();

// let sum = function(a, b) {
//     return a + b;
// }
// alert(sum(1,2));

// function ask(question, yes, no) {
//     if(confirm(question)) {
//         yes();
//     }else {
//         no();
//     }
// }

// function showOk() {
//     alert('you agreed');
// }

// function showCancel() {
//     alert('you disagreed');
// }

// ask('are you the boss?',
//     function () {
//         alert('you agreed');
//     },
//     function () {
//         alert('you disagreed');
//     }
// );


// let sum = function (a,b) {
//     return a + b;
// }

// alert(sum(10, 5));

// alert(sum(1, 5));

// function sum(a, b) {
//     return a + b;
// }

// let sum = (a, b) => a + b;
// alert(sum(2, 2));

// let mult = a => a * 2;
// alert(mult(3));

// let sayHello = () => {
//     alert('Hello');
//     alert('Hello world');
// }
// sayHello();

// let sum = () => {
//     return 10 + 10;
// }
// alert(sum());

// let yes = function () {
//     alert('you agreed');
// };

// let yes = () => alert('you agreed');

// yes();

// let user = {
//     name: 'david',
//     age: 20,
//     // 'likes bird': true,
// }

// user['likes bird'] = true;
// alert(user['likes bird']);
// delete user['likes bird'];
// alert(user['likes bird']);
// delete user.age;
// user.career = 'software engineer';
// alert(user['name']);
// alert(user.age);
// alert(user.career);

// let key = prompt('what do you want to know about our user?');
// alert(user.key);

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//         career: 'software Engineer',
//     }
// }

// let user = makeUser('david', 20);
// alert(user.career);

// let user = {
//     name: 'david',
//     age: 20,
//     isOld: true,
// };
// alert(user.gender === undefined);
// alert('name' in user);
// alert('age' in user);
// if('name' in user) {
//     alert('Hello world');
// }
// for(let key in user) {
//     alert(user[key]);
//     // alert(key)
// }

let workerSalary = {
    david: 50,
    clinton: 60,
    vanessa: 70
}

let ages = {
    obi: 20,
    ada: 25,
}

// let sum = 0;
// for(let key in workerSalary) {
//     sum = sum + workerSalary[key];
// }
// alert(sum);

// let salaries = workerSalary;
// alert(salaries.david);
// workerSalary.david = 70;
// alert(salaries.david)
let salaries = {
    david: 40,
};
Object.assign(salaries, workerSalary, ages);
// alert(salaries.david);
workerSalary.david = 100;
// alert(salaries.david);
// alert(salaries.obi)

// let user = {
//     name: 'david',
//     age: 20,
//     isOld: false,
//     size: {
//         height: 100,
//         width: 150,
//     }
// };

// let user2 = {};
// Object.assign(user2,user);
// alert(user2.name);
// user.name = 'kingsley';
// alert(user2.name)
// alert(user2.size.height);
// user.size.height = 200;
// alert(user2.size.height);
// let user3 = structuredClone(user);
// // alert(user3.name)
// alert(user3.size.height);
// user.size.height = 300;
// alert(user3.size.height);

// let num = 1000_000_000;
// let billion = 2.5e6;
// let num = 3.9;
// alert(Math.floor(num));
// let num = 4.5;
// alert(Math.ceil(num));
// let num = 4.8;
// alert(Math.round(num))
// let randomNum = Math.random();
// alert(randomNum);
// let randomNumScaled = Math.floor(Math.random() * 10);
// alert(randomNumScaled);
// alert(Math.max(10, 20, 30, 40));
// alert(Math.min(10, 20, 30, 40));
// alert(Math.pow(5, 5));
// let num = 3.1234;
// alert(num.toFixed(2));
// let str = 'single quoted';
// let str2 = "double quoted";
// let str3 = `back ticks`;
// let name1 = prompt('enter your name');
// alert(`your name is ${name1}`);
// let guestList = `Guests:
// david
// sophia
// clinton
// vanessa
// `
// alert(guestList);
// let guestList = 'Guests \n david \n sophia \n clinton \n vanessa';
// alert(guestList);
// let str = 'Hello';
// alert(str.charAt(4));
// let str = 'Hello';
// let str2 = 'World';
// let str3 = str.concat(' ',str2);
// alert(str3);
// let str = "pawpaw";
// alert(str.includes('david'));
// alert(str.indexOf('d'));
// alert(str.slice(0, 3));
// let str = 'Hello World';
// alert(str.toLowerCase());
// alert(str.toUpperCase());
// let str = '  Hello word   ';
// alert(str.trim());
// let str = 'Hello World';
// alert(str.replace('World', 'Clinton'));
// alert(str.substring(0, 5));
// alert(str.startsWith('H'));
// alert(str.endsWith('d'));
// alert(str.repeat(2));

// let user = {
//     name: 'david',
//     age: 20,
//     'my career': 'software engineer',
// }
// alert(user['my career']);
// user['my career'] = 'chef';

// alert('age' in user);
// for(let key in user) {
//     alert(key);
// }

// let user2 = {
//     name: 'kingsley',
// }
// alert(user2.name);
// Object.assign(user2,user)
// alert(user2.name);

// let fruits = ['Apple','banana','orange','guava'];
// // alert(fruits[3]);
// fruits[0] = 'pear';
// // alert(fruits[0])
// fruits[4] = 'pawpaw';
// // alert(fruits[4])
// // alert(fruits.length)
// alert(fruits)

// let arr = ['Apple', 'banana', 'cashew', 10, {name: 'david'}, function() {alert('Hello')}, function() {alert('How are you')}, true, false];
// alert(arr[4].name);
// arr[5]();
// arr[6]();
// alert(arr[3])

// let arr = [1, 2, 3];
// arr.push(function(){alert('hello')});
// // alert(arr);
// arr[3]()

// let arr = [1, 2, 3, 4, 5];
// alert(arr);
// arr.pop();
// // alert(removed);
// alert(arr);
// alert(arr);
// arr.shift();
// alert(arr);
// arr.unshift(0);
// alert(arr);
// let arr2 = [4, 5, 6];
// let arr3 = arr.concat(arr2)
// alert(arr3)
// let str = arr.join('a');
// alert(str);
// let arr2 = arr.slice(1, 4);
// alert(arr2)
// arr.splice(1);
// // arr.splice(4, 0, 9);
// alert(arr)
// arr.splice(2, 1, 7);
// alert(arr);
// alert(arr.indexOf(4));
// alert(arr.includes('obi'));
// arr.reverse();
// alert(arr);

// let randomNum = Math.floor(Math.random() * 50);
// let score = 0;
// let guessedNum;
// while(true) {
//     guessedNum = +prompt('Guess a number between 1 to 50');
//     if(guessedNum === 0) {
//         alert(`Game Over: your score is ${score}`);
//         break;
//     }

//     if(guessedNum === randomNum) {
//         alert('You are correct');
//         score++;
//         randomNum = Math.floor(Math.random() * 50);
//     }else if(guessedNum < randomNum) {
//         alert('Guessed number too low, try again');
//     }else {
//         alert('Guessed number too high, try again');
//     }
// }


// let arr = ['apple', 'banana', 'pineapple'];
// arr.forEach(item => alert(item));

// let arr = [1, 2, 4, 5];
// arr.forEach(function(item) {
//     alert(item * 2);
// })

// let arr2 = arr.map(function(item) {
//     return item * 2;
// })
// alert(arr2);

// let users = [
//     {name: 'david', age: 20},
//     {name: 'clinton', age: 21},
//     {name: 'vanessa', age: 22},
//     // function () {
//     //     alert('hello');
//     // }
// ]

// // users[3]();

// let userName = users.map(function(item, index) {
//     return item.age + index;
// })

// alert(userName);

let arr = [1, 2, 3, 4];
let found = arr.find(function(x) {
    return x > 2;
})
// alert(found);

// const users = [
//     { name: 'Alice', active: false },
//     { name: 'Bob', active: true },
//     { name: 'Charlie', active: false }
//   ];
  
//   const activeUser = users.find(user => user.active);
// //   alert(activeUser)

// const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const findWord = words.find(word => word.length > 5);
// // alert(findWord)

// const users = [
//     {name: 'david', active: true},
//     {name: 'clinton', active: true},
//     {name: 'vanessa', active: false}
// ]

// let activeUser = users.find(function(user) {
//     return user.active === true;
// })

// alert(activeUser.name)

// let fruits = ['apple', 'orange', 'pineapple'];
// let foundFruit = fruits.find(function(item) {
//     return item.length > 5;
// })

// alert(foundFruit);

// let num = [1, 2, 3, 4, 5];
// let filterdNum = num.filter((item) => {
//     return item >= 3;
// })
// alert(filterdNum);

// const users = [
//         {name: 'david', active: true},
//         {name: 'clinton', active: true},
//         {name: 'vanessa', active: false}
//     ]

// const filteredUsers = users.filter(function(item) {
//     return item.active === true;
// })
// let mappedUsers = filteredUsers.map(function(item) {
//     return item.name;
// })
// alert(mappedUsers);

// let num = [1, 2, 3, 4, 5];
// let numIndex = num.findIndex(function(item) {
//     return item > 2;
// })
// alert(numIndex);

// let num = ['banana', 'apple', ];
// num.sort();
// alert(num);

// let num = [1, 2, 3, 4, 5];
// let somedNum = num.some(function(item) {
//     return item > 2;
// })
// alert(somedNum);

// let num = [1, 2, 3, 4, 5];
// let somedNum = num.every(function(item) {
//     return item > 2;
// })
// alert(somedNum);

// let num = [1, 2, 3, 4, 5];
// num.fill(0);
// alert(num);

// let num = [1, 2, 3, 4, 5];
// let num2 = num.toString();

// let num = [1, 2, 3, [4, 5], [6, 7]];
// let num3 = num.flat();

// let num = [1, 2, 3, 4, 5];
// // num.copyWithin(2, 0, 2);
// num.copyWithin(0, 2);
// alert(num);
// let num = 25;
// alert(Math.sqrt(num));
// const now = new Date(); 
// const now = new Date(1999,0,20);
// alert(now);
// const now = new Date(); 
// // alert(now.getMinutes())
// alert(now.getMonth());
// now.setMonth(11);
// alert(now.getMonth());\
// let num = 0;
// setTimeout(function() {
//     num++;
//     alert(num)
// },2000)

// function greet(name) {
//     alert(`Hello ${name}`);
// }
// let timer = setTimeout(greet, 3000, 'David');
// clearTimeout(timer);

// setInterval(function() {
//     alert('Hello world');
// }, 3000)
let num = 0;
// setInterval(function(){
//     alert(num ++);
// }, 2000)

// const myInterval = setInterval(function() {
//     num++;
//     alert(num);

//     if(num === 5) {
//         clearInterval(myInterval);
//     }
// },2000)
// document['body']['style']['backgroundColor'] = 'red';
// setTimeout(function() {
//     document.body.style.backgroundColor = 'white';
// },3000)

// alert(location.href);
// if(confirm('Go to youtube')) {
//     location.href = 'https://www.youtube.com/';
// }

// let headerElement = document.getElementById('header');
// // alert(headerElement.textContent);
// headerElement.style.color ='red';

// let myP = document.getElementsByClassName('myYo');
// alert(myP[1].textContent);
// myP[1].textContent = 'Hello Clinton';
// alert(myP[1].textContent);
// const myParagraph = document.getElementsByTagName('p');
// // alert(myParagraph[0].textContent)
// myParagraph[1].style.color = 'blue';
// const myP = document.querySelector('p');
// alert(myP.textContent)
// const myP = document.querySelectorAll('p');
// // alert(myP[1].textContent)
// myP[1].textContent = 'Hello Clinton';
// myP[1].style.color = 'pink';
// const myDiv = document.querySelectorAll('#parentDiv p')
// alert(myDiv[0].textContent);
// const myP = document.getElementById('one');
// myP.className = 'two';
// const pOne = document.getElementById('one');
// pOne.textContent = 'new text';
// pOne.style.color = 'pink';
// const myH1 = document.createElement('h1');
// myH1.textContent = 'h1 created in javascript';
// myH1.style.color = 'red';
// myH1.className = 'hiClass';
// myH1.id = 'h1Id';
// const hiDiv = document.getElementById('myDiv');
// hiDiv.appendChild(myH1);
// const yourH1 = document.createElement('h1');
// yourH1.textContent = 'My nigga';
// yourH1.style.color = 'orange';
// const clinton = document.getElementById('second');
// let mySecond = clinton.firstChild;
// clinton.insertBefore(yourH1, mySecond);
// const bodyParent = document.getElementById('second')
// bodyParent.insertAdjacentHTML('beforeend', '<h1 style="color: red;">Hello world</h1>');
// const myH1 = document.createElement('h1');
// myH1.textContent = 'KING DAVID';
// myH1.style.color = 'white';
// myH1.style.backgroundColor = 'black';
// const bodyParent = document.body;
// bodyParent.append(myH1);
// const pOne = document.getElementById('one');
// alert(pOne.textContent);

// function changeBg() {
//     document.body.style.backgroundColor = 'brown';
//     alert(`you changed the background color to brown`);
// }
// const myBtn = document.getElementById('btn');
// myBtn.addEventListener('dblclick', function (){
//     const myP = document.getElementById('one');
//     myP.textContent = 'KING DAVID';
//     myP.style.color = 'white';
//     myP.style.backgroundColor = 'pink';
//     myP.style.fontFamily = 'sans-serif';
//     myP.style.padding = '20px'
// })

const clickBtn = document.getElementById('clickBtn');
const dblclickBtn = document.getElementById('dblclickBtn');
const hoverBtn = document.getElementById('hoverBtn');
const mouseDownBtn = document.getElementById('mouseDownBtn');
const mouseUpBtn = document.getElementById('mouseUpBtn');

// clickBtn.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
//     document.body.style.textAlign = 'center';
// })

// dblclickBtn.addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
// })

const form = document.getElementById('myForm');
const inputText = document.getElementById('inputText');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('form submitted' + ' ' +  inputText.value);
// })
// inputText.addEventListener('focus', function(){
//     document.body.style.backgroundColor = 'red';
//     document.body.style.color = 'white';
// })
// inputText.addEventListener('blur', function() {
//     document.body.style.backgroundColor = 'red';
// })

// inputText.addEventListener('keydown', function(){
//     document.body.style.backgroundColor = 'red';
// })
// inputText.addEventListener('keyup', function(){
//     document.body.style.backgroundColor = 'red';
// })
// window.addEventListener('load', function() {
//     document.body.style.backgroundColor = 'red';
// })
// window.addEventListener('scroll', function() {
//     document.body.style.backgroundColor = 'red';
// })
// window.addEventListener('resize', function() {
//     document.body.style.backgroundColor = 'red';
// })


// const btn = document.getElementById('btn');
// const display = document.getElementById('display');
// btn.addEventListener('click', function(e){
//     e.preventDefault();
//     const currentYear = new Date().getFullYear();
//     const userYear = document.getElementById('input').value;
//     if(userYear !== '') {
//         const age = currentYear - userYear;
//         display.textContent = `you are ${age} years old`;
//     }else {
//         display.textContent = 'Input your birth year';
//     }
// })

// const changeBtn = document.getElementById('change');
// changeBtn.addEventListener('click', function() {
//     const colors = ['red', 'blue', 'pink', 'brown', 'purple', 'orange', 'green'];
//     const random = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[random];
// })

// let anything = setInterval(function(){
//     const colors = ['red', 'blue', 'pink', 'brown', 'purple', 'orange', 'green'];
//     const random = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[random];
// }, 2000);

//   /\s+/


// const btn = document.getElementById('btn');
// const myScreen = document.getElementById('screen');
// btn.addEventListener('click', function(){
//     let combo = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!~@#$%^&*()}{:"?><|';
//     let password = '';
//     let length = document.getElementById('input').value;
//     for(let i = 0; i < length; i++) {
//         let randomNum = Math.floor(Math.random() * combo.length);
//         password += combo[randomNum];
//     }
//     myScreen.textContent = `your random password is:   ${password}`;
// })

// const btn = document.getElementById('btn');
// const myScreen = document.getElementById('display');
// btn.addEventListener('click', function() {
//     let num = Number(document.getElementById('input').value);
//     if(num > 0) {
//         const myInterval = setInterval(function(){
//             myScreen.textContent = num;
//             num--;
//             if(num < 0) {
//                 clearInterval(myInterval);
//                 myScreen.textContent = "Time's Up";
//             }
//         }, 2000)
//     }
// })

const screen = document.getElementById('screen');
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = button.getAttribute('data-num') || button.getAttribute('data-op');

        if (!isNaN(value)) {  // If it's a number
            if (operator === '') {
                // Build the first number (num1)
                num1 += value;
                screen.textContent = num1;
            } else {
                // Build the second number (num2) after an operator is selected
                num2 += value;
                screen.textContent = num2;
            }
        } else if (value === '*' || value === '/' || value === '+' || value === '-') {           
                operator = value;
                screen.textContent = operator;
        }
    });
});

// Event listener for the equal button
document.getElementById('equal').addEventListener('click', function() {
    const num1Rep = parseFloat(num1);
    const num2Rep = parseFloat(num2);

  
        switch (operator) {
            case '+':
                result = num1Rep + num2Rep;
                break;
            case '/':
                result = num1Rep / num2Rep;
                break;
            case '-':
                result = num1Rep - num2Rep;
                break;
            case '*':
                result = num1Rep * num2Rep;
                break;
        }
        screen.textContent = result;

        // Reset values after calculation
        num1 = result.toString();
        num2 = '';
        operator = '';
    
});

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', function() {
    num1 = '';
    num2 = '';
    operator = '';
    screen.textContent = '';
});
