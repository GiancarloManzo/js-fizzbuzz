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
  } else if (output === "Fizz") {
    console.log(
      i + " %cFizz",
      " background: rgb(255 127 80); color: black; font-weight: bold;"
    );
  } else if (output === "Buzz") {
    console.log(
      i + " %cBuzz",
      "background: rgb(100 149 237); color: black; font-weight: bold;"
    );
  } else {
    console.log(
      i + " %cFizzBuzz",
      "background: rgb(107 142 35); color: black; font-weight: bold; padding: 2px 6px;"
    );
  }
}
