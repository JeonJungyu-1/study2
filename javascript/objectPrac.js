// let user = {
//     name: 'john',
//     age: 30
// };

// console.log(user);
// console.log(user.name);

// let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');


// let user = { name: 'john', age: 30};

// alert('age' in user);
// alert('blabla' in user);

// let user = {
//     name: 'john',
//     surname: 'smith'
// };
// user.age = 25;

// for

// 1
// user = {};
// user['name'] = 'John';
// user['surname'] = 'Smith';
// user['name'] = 'Pete';
// delete user['name'];

// 2
// let isEmpty = (obj) => {
// 
    // for (let key in obj) {
    //   if (key in obj) {
    //     return false;
    //   }
    // }
    // return true;
    
//     for (let key in obj) {
//         return false;
//     }
//     return true;
//   }

// 3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

// 4
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
  
//   function multiplyNumeric(obj) {
    
//     for (let key in obj) {
//       if (typeof(obj[key]) == 'number') {
//         obj[key] *= 2;
//       }
//     }
  
//   }
  
//   multiplyNumeric(menu);
  
//   alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

// user = {
//  sayHi: function() {
//      alert('Hello');
//  }
// };

// user = {
//     sayHi() {
//         alert('Hello');
//     }
// };

// const calculator = {
//     read: function() {
//       this.one = parseInt(prompt('첫번째 값', 0));
//       this.two = parseInt(prompt('두번째 값', 0));
//     },
//     sum() {
//       return (this.one + this.two);
//     },

//     mul() {
//       return (this.one * this.two);
//     }
//   };

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() {
//       alert(this.step);
//       return this;
//     }
//   };


// let obj = {};
// function A() {
//     return obj;
// }
// function B() {
//     return obj;
// }
// alert (new A() == new B());
// let a = new A;
// let b = new B;
// alert( a == b );

// function Calculator() {
//     this.read = function() {
//       this.one = +prompt('첫번째값', 0);
//       this.two = +prompt('두번째값', 0);
//     }
//     this.sum = function() {
//       return this.one + this.two;
//     }
//     this.mul = function() {
//       return this.one * this.two;
//     }
//   }

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//       this.value += +prompt('현재 값', 0);
//     }
//   }

// let user = {};
// alert(user.address.street);


// let user = {
//     name: 'john',
//     money: 1000,

//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == 'string' ? `{name: '${this.name}'}` : this.money;
//     }
// };

// alert(user);
// alert(+user);
// alert(user + 500)

// let john = {
//     name: 'john',
//     sayHi: function() {
//         alert('친구야 반갑다!');
//     }
// };

// john.sayHi();

// let n = 1.23456
// alert(n.toFixed(2));

