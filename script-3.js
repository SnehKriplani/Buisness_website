var titlearray =["Tshirt","Shirt","Jeans","Shorts","Pyjanmas"];
var descriptionarray =["Upto 20% OFF","Upto 20% OFF","Upto 20% OFF","Upto 20% OFF","Upto 20% OFF"];

var dynamic = document.querySelector('.container-3');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.container-3').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes-3">
      <div class="box-content-3">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        <button class="showmore-3" href="#">Buy Now</button>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('https://source.unsplash.com/weekly?kids,${titlearray[i]}')`;
} 
