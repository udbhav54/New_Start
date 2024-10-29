const accountId = 1444453
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaiput" // not a good way to write

let accountState;

console.log(accountCity);

accountCity = "bengalore"
console.log(accountCity);



// accountId = 2314 // NOt Allowed
console.log(accountEmail);

console.log(accountPassword);


// accountEmail = "csa@gmail.com" // Allowed

// accountPassword = "69854"  // Allowed
console.log(accountPassword);


console.log(accountEmail);


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*

Prefer not to use var
because of issue in block scope and function scope


*/
