

// for (var i = 1; i < 11; i++) {
//     console.log(i)
// }




// var i = 1;
// while (i < 11) {
//     console.log(i)
//     i++;
// }

// var i = 10;
// while (i > 0) {
//     console.log(i)
//     i--
// }


// var string = 'ajpja';
// function findPalindrome(string) {
//     var left = 0
//     var right = string.length - 1;
//     while (left < right) {
//         if (string[left] !== string[right]) {
//             return "Not a palindrome"
//         } else {
//             left++;
//             right--;
//         }
//     }
//     return "Its a Palindrome"
// }

// console.log(findPalindrome(string))






// var string = "abvvc"
// function findPalindrome(string) {
//     for (var i = 0; i < Math.floor(string.length / 2); i++) {
//         if (string[i] !== string[string.length - 1 - i]) {
//             return "Not a palindrome"
//         }
//     }
//     return "Its a palindrome"
// }

// console.log(findPalindrome(string))


// var i = 1;

// do {
//     console.log(i)
//     i++
// } while (i < 11)




// function myDetails(myname, mysurname, myage) {
//     this.name = myname;
//     this.surname = mysurname;
//     this.age = myage;
//     this.checkDl = function () {
//         if (this.age > 5) {
//             return `${this.age} is more than 5`;
//         }
//     }
//     this.checkDl2 = function () {
//         if (this.age > 5) {
//             return `${this.age} is more than 5`;
//         }
//     }
//     this.checkDl3 = function () {
//         if (this.age > 5) {
//             return `${this.age} is more than 5`;
//         }
//     }
// }


// const me = new myDetails("krushna", "dawande", 24)
// const me2 = new myDetails("krushnaraj", "krushh_77", 24)
// console.log(me.name)
// console.log(me2.name)
// console.log(me.checkDl())
// console.log(me2.checkDl())