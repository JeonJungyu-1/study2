// var ga = 'Global variable';

// console.log(ga);
// console.log(window.ga);

// function foo() {
//     console.log('inoked!');
// }
// window.foo();

// var obj1 = {
//     name: 'Lee',
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// var obj2 = {
//     name: 'Kim'
// }

// obj2.sayName = obj1.sayName;

// obj1.sayName();
// obj2.sayName();

// 생성자 함수
// function Person(name) {
//     this.name = name;
//   }
  
//   var me = new Person('Lee');
//   console.log(me); // Person&nbsp;{name: "Lee"}
  
//   // new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
//   var you = Person('Kim');
//   console.log(window.name); // undefined


//   var x = 'xxx';

// function foo () {
//   var y = 'yyy';

//   function bar () {
//     var z = 'zzz';
//     console.log(x + y + z);
//   }
//   bar();
// }
// foo();

// let foo = 1; // 전역 변수

// {
//   console.log(foo); // ReferenceError: foo is not defined
//   let foo = 2; // 지역 변수
// }

// var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
// for (var i = 0; i < 3; i++) {
//   funcs.push(function () { console.log(i); });
// }

// // 배열에서 함수를 꺼내어 호출한다.
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

// var funcs = [];

// // 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
// for (var i = 0; i < 3; i++) {
//   (function (index) { // index는 자유변수다.
//     funcs.push(function () { console.log(index); });
//   }(i));
// }

// // 배열에서 함수를 꺼내어 호출한다
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }



// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }
// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// var funcs = [];

// // 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
// for (var i = 0; i < 3; i++) {
//   (function (index) { // index는 자유변수다.
//     funcs.push(function () { console.log(index); });
//   }(i));
// }

// // 배열에서 함수를 꺼내어 호출한다
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

// const template = `<ul class="nav-items">
//   <li><a href="#home">Home</a></li>
//   <li><a href="#news">News</a></li>
//   <li><a href="#contact">Contact</a></li>
//   <li><a href="#about">About</a></li>
// </ul>`;
// console.log(template);

// const first = 'Ung-mo';
// const last = 'Lee';

// console.log('My name is ' + first + ' ' + last + '.');
// console.log(`My name is ${first} ${last}.`);
// let a = () => {
//   const x = 10;
//   return x * x;
// };
// console.log(a());

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "동의하십니까?",
//   function() { alert("동의하셨습니다."); },
//   function() { alert("취소 버튼을 누르셨습니다."); }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   '동의하십니까?',
//   () => alert('동의하셨습니다.'),
//   () => alert('취소 버튼을 누르셨습니다.')
// );

