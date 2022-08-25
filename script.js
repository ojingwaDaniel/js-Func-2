// before we do this
const mutiply = (a,b)=>{
    // to make sure this does not return NaN when a user fail to input  a value we check manually if y was passed in
    b = typeof b  == 'undefined' ? 1 : b
    return a * b
}
// default parameter
const mutiply2 = (a,b=1)=>{
    // to make sure this does not return NaN when a user fail to input  a value we check manually if y was passed in
    return a * b
}
// another example
const greetingPlayers = ((playerName,greeting = 'Hi')=>{
    return `${greeting} ${playerName}!`
})