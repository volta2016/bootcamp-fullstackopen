// Los primitivos son inmutable
let nombre = 'Miguel'
let name_2 = 'naruto'
nombre = 3
let verdad = true
let falso = false



const nuevoName = name_2.toUpperCase()

console.log(nuevoName);//crea un nuevo string no modifica el original

console.log(nombre)
undefined
null

// son mutable los obj:

// un array un obj funciones puedes cambiar el valor
// que sea const significa que no pueda cambiar si no re asignar
const list = []
list.push(157)
const anotherList = list.concat(157)

console.log(anotherList[0])

const persona = {
  name: 'Naruto',
  twiter: '@naruto',
  age: 28,
  isDeveloper: true,
  links: ['https://studies.cs.helsinki.fi/exampleapp/', 'https://www.twitch.tv/']
}

console.log(persona.link[0])

const field = 'twiter'

console.log(persona[flield])
// el objeto persona entra la var field y regresa el valor


console.log(persona['flield']) //no va entrar no se encuentra el key

// function
// parametro de la funcion > ciudadanos de primera clase es un var mas
// function expresion a una constante se le asigna una expresión
restar(2,2)

const sumar = (valor1, valor2) => {
  console.log(valor1)
  console.log(valor2)
  return valor1 + valor2
}
// declaracion
function restar(a,b) {
  return a -b
}
// const op1 = 8
// const op2 = 2

// argumento
console.log(sumar(5,7))

// = asignacion, == igual, === igual y del mismo tipo