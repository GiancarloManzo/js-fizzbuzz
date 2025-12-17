const multiplo = parseInt(prompt("Inserisci un multiplo"));
const limite = parseInt(prompt("inserisci il limite (numero > 0"));

if (isNaN(multiplo) || isNaN(limite) || multiplo <= 0 || limite <= 0) {
  throw new Error("Devi inserire un numero maggiore di 0");
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
