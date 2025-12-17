const multiplo = parseInt(prompt("Inserisci un multiplo"));
const limite = parseInt(prompt("inserisci il limite (numero > 0)"));

if (isNaN(multiplo) || isNaN(limite) || multiplo <= 0 || limite <= 0) {
  alert("Errore: devi inserire solo numeri maggiori di 0 ");
  throw new Error("Devi inserire un numero maggiore di 0");
}

for (let i = multiplo; i <= limite; i += multiplo) {
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
