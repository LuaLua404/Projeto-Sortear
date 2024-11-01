function generateNumber(){
const entre = Math.ceil(document.querySelector(".entre").value)
const e = Math.floor(document.querySelector(".e").value)

const result = Math.floor(Math.random()*(max - min + 1)) + min;

alert(result)
}


