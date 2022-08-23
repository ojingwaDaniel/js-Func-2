// passing functions as an array
const add = function(x,y){
    return  x + y
}
const subtract = function(x,y){
    return  x - y
}
const mutiply = function(x,y){
    return  x * y
}
const divide = function(x,y){
    return  x / y
}
const basicOpreator = [add,subtract,mutiply,divide]
for (let opreator of basicOpreator) {
   let answer = opreator(50,2)
   console.log(answer)
    
}
// as an object 
let opreators = {
    add : add,
    mutiply: mutiply,
    divide : divide
}
for (let func in opreators) {
    let result = opreators[func]
    console.log(result(4,5))

}
function square(num,raiseTo){
    return num ** raiseTo
}
// FUNCTION AS A PARAMETER
function motivationsMusic(){
    let music = {
        'Non-stop' : 'kaptin ft Teni',
        'Rise': 'T Dollar',
        'Try': 'T Blaze',

    }
    console.log (music)
}
function deepWorship(){
    let music = {
        'There was Jesus' : 'Zach Williams ft Dolly Parton',
        'confidence': 'Snactus Real',
        'God is so Good' : 'Passion'
    }
    console.log (music)

}
function emotionsLevel(level){
    // level = prompt('whats level is your emotion')
    level = Number(level)
    if (level <= 5) {
        motivationsMusic()
        
    }
    if(level >5){
        deepWorship()
    }
}
emotionsLevel()
// functions as an arguemnt
function favoriteplayer(){
    console.log('raphina')
}
function repeat(player,loveRating){
   for (let index = 0; index < loveRating; index++) {
    player()
  
    
   }
}
repeat(favoriteplayer,4)
 // FUNCTION AS A RETURN STATEMENT
 function Divide(parameter){
    return function(num){
        return num / parameter
    }
 }
let divideby2 = Divide(2)
let divide3 = Divide(3)
// function checking for the minimum and maximum a club can recruit 
// building for the future no 30 years player
function recruit(min,max){
    return function(playersAge){
        if(playersAge >= min && playersAge <= max  ){
            console.log('your age passed our age check goodluck on your recruit')
            
        }else{
            console.log('Sorry your age does not pass our age check')
        }
    }
    
}
let age = recruit(16,29)
/// callback function
function callback(){
    alert('WELCOME TO THE INTRODUCTION OF CALLBACK')
}
let button = document.querySelector('button')
button.addEventListener('click',callback)
function note(){
    alert('i hope you add a value to yourself')
}
setTimeout(note,3000)

