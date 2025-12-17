const multiplo = parseInt(prompt("Inserisci un multiplo"));
const limite = parseInt(prompt("Inserisci il limite (numero > 0)"));

if (isNaN(multiplo) || isNaN(limite) || multiplo <= 0 || limite <= 0) {
  alert("Errore: devi inserire solo numeri maggiori di 0 ");
  throw new Error("Devi inserire un numero maggiore di 0");
}

for (let i = multiplo; i <= limite; i += multiplo) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  if (output === "") {
    console.log(i);
  } else {
    console.log(i + " " + output);
  }
}
