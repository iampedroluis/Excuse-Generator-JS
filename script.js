let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


whorandom = Math.floor(Math.random()* (3-0+1)+0)
actionrandom = Math.floor(Math.random()* (3-0+1)+0)
whatrandom = Math.floor(Math.random()* (2-0+1)+0)
whenrandom = Math.floor(Math.random()* (4-0+1)+0)
let laexcusa = who[whorandom]+' ' + action[actionrandom]+' ' + what[whatrandom]+ ' '+ when[whenrandom]

const documento = document.body

documento.onload = refresh()

function refresh(){
document.getElementById('excuse').innerHTML = laexcusa
}