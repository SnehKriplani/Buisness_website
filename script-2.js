var titlearray =["Tshirt","Shirt","Jeans","Shorts","Kurtas"];
var descriptionarray =["Upto 20% OFF","Upto 20% OFF","Upto 20% OFF","Upto 20% OFF","Upto 20% OFF"];

var dynamic = document.querySelector('.container-2');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.container-2').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes-2">
      <div class="box-content-2">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        <button class="showmore-2" href="#">Buy Now</button>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('https://source.unsplash.com/weekly?men,${titlearray[i]}')`;
} 
