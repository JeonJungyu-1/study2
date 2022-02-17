describe("pow", function() {

//     it("주어진 숫자의 n 제곱", function() {
//         assert.equal(pow(2, 3), 8);
//         assert.equal(pow(3, 4), 81);
//     });
    it("주어진 숫자의 n 제곱", function() {
        let x = 5;
      
        let result = x;
        assert.equal(pow(x, 1), result);
      
        result *= x;
        assert.equal(pow(x, 2), result);
      
        result *= x;
        assert.equal(pow(x, 3), result);
      });
});

describe("주어진 숫자의 n 제곱", function() {
    it("5를 1 제곱하면 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5를 2 제곱하면 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5를 3 제곱하면 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });



// describe("pow", function() {

//     it("2를 세 번 곱하면 8입니다.", function() {
//         assert.equal(pow(2, 3), 8);
//     });

//     it("3을 네 번 곱하면 81입니다.", function() {
//         assert.equal(pow(3, 4), 81);
//     });

// });

// describe('pow', function() {
//     function makeTest(x) {
//         let expected = x * x * x;
//         it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function() {
//             assert.equal(pow(x, 3), expected);
//         });
//     }

//     for (let x = 1; x <= 5; x++) {
//         makeTest(x);
//     }

// });

// describe('pow', function() {
    
//     describe('x를 세 번 곱합니다.', function() {

//         // before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
//         // after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));
      
//         // beforeEach(() => alert("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
//         // afterEach(() => alert("단일 테스트를 종료합니다 - 각 테스트 종료 후"));


//         function makeTest(x) {
//             let expected = x * x * x;
//             it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function() {
//                 assert.equal(pow(x, 3), expected);
//             });
//         }

//         for (let x = 1; x <= 5; x++) {
//             makeTest(x);
//         }
//     });
// });