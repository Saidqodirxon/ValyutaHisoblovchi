let form = document.querySelector("form");
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");

//
//
let input = document.querySelector("#input");
let natija = document.querySelector("#javob");
//
//

usdK = 11258; // 63Rub
rubK = 179; //0.02 USD
eurK = 11847; // 66.16rub 1.05usd

// input.value = Number(" ");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);
  console.log(select1.value);
  console.log(select2.value);

  if (select1.value == "USD" && select2.value == "UZS") {
    natija.textContent = `${input.value * usdK} UZS`;

    //
  } else if (select1.value == "USD" && select2.value == "EUR") {
    natija.textContent = `${(input.value * 0.9502).toFixed(4)} EUR`;
    //
  } else if (select1.value == "USD" && select2.value == "RUB") {
    natija.textContent = `${(input.value * 63).toFixed(2)} RUB`;
  }
  //
  else if (select1.value == "EUR" && select2.value == "UZS") {
    natija.textContent = `${(input.value * eurK).toFixed(2)} UZS`;
  }
  //
  else if (select1.value == "EUR" && select2.value == "USD") {
    natija.textContent = `${(input.value * 1.0523).toFixed(4)} USD`;
  }
  //
  else if (select1.value == "EUR" && select2.value == "RUB") {
    natija.textContent = `${(input.value * 0.02).toFixed(2)} RUB`;
  }
  //
  else if (select1.value == "RUB" && select2.value == "UZS") {
    natija.textContent = `${(input.value * rubK).toFixed(2)} UZS`;
  }
  //
  else if (select1.value == "RUB" && select2.value == "USD") {
    natija.textContent = `${(input.value * 0.02).toFixed(2)} USD`;
  }
  //
  else if (select1.value == "RUB" && select2.value == "EUR") {
    natija.textContent = `${(input.value * 0.02).toFixed(2)} EUR`;
  }
  //
  else if (select1.value == "UZS" && select2.value == "USD") {
    natija.textContent = `${(input.value * 0.000088).toFixed(6)} USD`;
  }
  //
  else if (select1.value == "UZS" && select2.value == "EUR") {
    natija.textContent = `${(input.value * 0.000084).toFixed(6)} EUR`;
  }
  //
  else if (select1.value == "UZS" && select2.value == "RUB") {
    natija.textContent = `${(input.value * 0.01).toFixed(6)} EUR`;
  }
  //
  else if (select1.value == "tanla" || select2.value == "tanla") {
    natija.textContent = `Valyutani tanlang .`;
  } else if (input.value == "") {
    natija.textContent = `Valyuta Miqdorini Kiriting .`;
  }
  //
  else {
    natija.textContent = `Xatolik bir xil qiymat kiritildi .`;
  }
});
