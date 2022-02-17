// let one = +prompt('첫번째수', 0);
// let two = +prompt('두번째수', 0);
// alert(one + two);

// function readNumber() {
//     let num;
//     do {
//       num = prompt('숫자', 0);
//     } while (!isFinite(num));
//   if (num === null || num === '') return null;

//   return +num;
//   }

// function random(min, max) {
//     return min + (Math.random() * (max-min));
// }

// function randomInteger(min, max) {
    // return Math.round(min + (Math.random() * (max-min)));
// }

// let str = 'Hello';
// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str[str.length - 1]);

// for (let char of "Hello") {
//     console.log(char);
// }

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`위치: ${foundPos}`);
//     pos = foundPos + 1;
// }

// function ucFirst(str) {
//     if (!str) return str;
//     let str2 = str.slice(1);
//     str2 = str[0].toUpperCase() + str2;
//     return str2;
//   }

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//       return str.slice(0, maxlength-1) + '…';
//     }
//     return str;
//   }

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }


// styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// styles[Math.floor(styles.length/2)] = 'Classics';
// console.log(styles.shift());
// styles.unshift('Reggae');
// styles.unshift('Rap');
// console.log(styles);


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); 

// let arr = [];
// while (true) {
//     let num = prompt('입력', 0);
//     if (num === null || num === '' || !isFinite(num)) {
//         break;
//     } else {
//         arr.push(+num)
//     }
// }
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// [1, -2, 15, 2, 0, 8].sort(function(a,b) {
//     alert( a + ' <> ' + b);
//     return a - b;
// });


// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }


// function filterRange(arr, a, b) {
//     let filArr = arr.filter(item => item >= a && item <= b )

//     return filArr;
//   }


// let arr = [5, 2, 1, -10, 8];

// function compare(a, b) {
//     if (a > b) return -1;
//     else if (a == b) return 0;
//     else if (a < b) return 1;
// }
// arr.sort(compare);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );

// function copySorted(arr) {
//     let so = arr.slice(0).sort();
//     return so;
// }

// let arr = ['html', 'javascript', 'css'];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     };
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);

// console.log( names ); // John, Pete, Mary




// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: `${user.id}`
// }))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];


// function sortByAge(arr) {
//     function compare(a, b) {
//         if (a.age > b.age) return 1;
//         else if (a.age == b.age) return 0;
//         else if (a.age < b.age) return -1;
//     }
//     arr.sort(compare);
// }

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// function shuffle(arr) {
//     //피셔 예이츠 셔플
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let arr = [1, 2, 3];
//     shuffle(arr);
//     count[arr.join('')]++;
//   }
  
//   // 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
//   for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
//   }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr) {
//     let sum = 0;
//     for (let value of arr) {
//         sum += value.age;
//     }
//     return sum/arr.length;
// }

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// console.log( getAverageAge(arr) ); 


// function unique(arr) {
//     let arr2 = [];
//     for (let value of arr) {
//       if (!arr2.includes(value)) {
//         arr2.push(value);
//       }
//     }
//     return arr2;
//   }


// function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }

