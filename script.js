const costed = new Map([
  ["prid", 12000],
  ["pego", 13000],
  ["santafe", 14000],
  ["toyota", 15000],
  ["landcroz", 16000],
  ["tigo", 17000],
  ["honda", 18000],
  ["pishro", 19000],
  ["kavir", 20000],
]);

const resultmassage = document.getElementById("result-massage");
let selectedcar;
let selectedcarele;
const rentcar = new Array();

function selector(name, eless) {
  // alert(name + costed.get(name));
  for (let index = 0; index < rentcar.length; index++) {
    if (rentcar[index] == name) {
      alert("در حال حاضر موجود نمی باشد.");
      return;
    }
    if (costed.get(selectedcar)) {
      resultmassage.innerText = "";
    }
  }
  selectedcar = name;
  selectedcarele = eless.parentElement;
  const selectedlist = document.getElementsByClassName("display");
  for (let index = 0; index < selectedlist.length; index++) {
    selectedlist[index].classList.remove("display");
  }

  eless.parentElement.classList.add("display");
  document.getElementById("table").style.display = "block";
  document.getElementById("table2").style.display = "block";
}

function calccost() {
  const day = document.getElementById("day").value;

  const price = day * costed.get(selectedcar);
  const costele = document.getElementById("cost");
  if (day <= 0 || day > 365 || day == "") {
    alert("روز وارد شده اشتباه است");
    return;
  }
  costele.value = price;
}

function resultrent() {
  const name = document.getElementById("name").value;
  const family = document.getElementById("family").value;
  const phone = document.getElementById("phone").value;

  if (name == "" || family == "" || phone == "") {
    alert("لطفا مشخصات خود را کامل وارد نمایید.");
  } else {
    selectedcarele.classList.add("display-result");
    resultmassage.innerText =
      "درخواست شما با موفقیت ثبت شد لطفا تا 2 ساعت دیگر مدارک خود را آماده فرمایید.";
    document.getElementById("table").style.display = "none";
    document.getElementById("table2").style.display = "none";
    rentcar.push(selectedcar);
  }
}
