var titlearray = ["Tshirt", "Shirt", "Jeans", "Shorts", "Kurtas"];
var descriptionarray = [
  "Upto 20% OFF",
  "Upto 20% OFF",
  "Upto 20% OFF",
  "Upto 20% OFF",
  "Upto 20% OFF",
];

var dynamic = document.querySelector(".container");
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector(".container").innerHTML;
  dynamic.innerHTML =
    `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        <button class="showmore" href="#">Buy Now</button>
      </div>
    </div>` + fetch;
  var bgimg = document.getElementById(`cards${i}`);
  bgimg.style.backgroundImage = `url('https://source.unsplash.com/weekly?${titlearray[i]}')`;
}
