import './style.css'

async function getData(){
  try {
    const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`);
    if(response.status != 200){
      throw new Error(response)
    }else{
      const data = await response.json();
      data.forEach((title) => console.log(title))
      return getData;
    }
  } catch (error) {
    console.log(error);
  }
}

function inject(data){
  const container = document.querySelector(".container")
  container.insertAdjacentHTML("afterbegin",
    `<div class="card">
        <div class="Name">
          <h1>${data.title}</h1>
        </div>
      </div>`
    );
}

console.log(getData());

let dataarray = [];

dataarray.forEach(inject);

const last = document.getElementById("lastpage");
const next = document.getElementById("nextpage");

let pagenumber = 0

last.addEventListener("click", function () {
  if (pagenumber = 0) {
    console.log("CANT DO THAT")
  } else{
    pagenumber - 1
    console.log(pagenumber)
  }
});

next.addEventListener("click", function () {
  pagenumber++
  console.log(pagenumber)
});

/* https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageNumber=1 */
