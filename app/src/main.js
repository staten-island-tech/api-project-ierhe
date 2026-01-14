import './style.css'

async function getData(){
  try {
    const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`);
    if(response.status != 200){
      throw new Error(response)
    }else{
      const data = await response.json();
/*       data.forEach((title) => console.log(title))
      data.forEach((title) => inject(title)) */
      return getData;
    }
  } catch (error) {
    console.log(error);
  }
}

function inject(data){
  const container = document.querySelector(".container")
  container.insertAdjacentHTML("afterbegin",
    `<div class="card flex justify-center p-3">
      <div class="Name">
        <h1>${data.title}</h1>
      </div>
      <div class="Price">
        <h1>---${data.salePrice}</h1>
      </div>
    </div>`
  );
}

console.log(getData());

const last = document.getElementById("lastpage");
const next = document.getElementById("nextpage");

let pagenumber = 0

last.addEventListener("click", async function () {
  if (pagenumber == 0) {
    console.log("CANT DO THAT")
  } else{
    document.querySelector(".container").innerHTML = "";
    pagenumber -= 1
    console.log(pagenumber)
    try {
      const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageNumber=${pagenumber}`);
      if(response.status != 200){
        throw new Error(response)
      }else{
        const data = await response.json();
        data.forEach((title) => console.log(title))
        data.forEach((title) => inject(title))
        return getData;
      }
    } catch (error) {
      console.log(error);
    }
}});

next.addEventListener("click", async function () {
  document.querySelector(".container").innerHTML = "";
  pagenumber++
  console.log(pagenumber)
  try {
    const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageNumber=${pagenumber}`);
    if(response.status != 200){
      throw new Error(response)
    }else{
      const data = await response.json();
      data.forEach((title) => console.log(title))
      data.forEach((title) => inject(title))
      return getData;
    }
  } catch (error) {
    console.log(error);
  }
});


