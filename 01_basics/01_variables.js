const accountId = 1234
let accountEmail ="adesh@gmail.com"
var accountPassword ="9322791685"
accountCity ="kallam"
 let accountState;

// accountId = 2 // not allowed
/* do nt use var because of issue in block scope  and functional scope */
accountEmail = "adesh115@gmail.com"
accountPassword = "2121"
accountCity = "pune"

console.log(accountId);
console.table([accountId,accountPassword,accountEmail,accountCity,accountState])

