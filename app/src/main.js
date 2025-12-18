import './style.css'

async function getData(antivirus){
  try {
    //go get data
    const response = await fetch(`https://urlhaus-api.abuse.ch/v1/payloads/recent/`);
    //handle errors
    if(response.status != 200){
      throw new Error(response);
    }else{
      //makes the response into json data we can use
      const data = await response.json();
      console.log(data)
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(getData())