// let login = prompt("login ber", "");

// if (login === "admin") {
//   let pass = prompt("endi bi parol ber", "");
// } else if (login === "" || login === null) {
//   alert("otmen admen");
// } else {
//   alert("kimsan san ukam");
// }

//   if (password === "12345") {
//     alert("eeeee salom uzbela!");
//   } else if (password === "" || password === null) {
//     alert("otmen ku brat");
//   } else {
//     alert(fu);
//   }

let login = prompt("login ber", "");

if (login === "admin") {
  let pass = prompt("endi bi parol ber", "");

  if (pass === "12345") {
    alert("eeeee salom uzbela!");
  } else if (pass === "" || pass === null) {
    alert("otmen ku brat");
  } else {
    alert("notogri parol, chOrt");
  }
} else if (login === "" || login === null) {
  alert("otmen odmen");
} else {
  alert("kimsan san ukam");
}
