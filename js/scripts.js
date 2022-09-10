const btn = document.querySelector("#btn")
// const inputText = document.querySelector("#test")
const para = document.getElementById("para")
var test


fetch("https://dog.ceo/api/breeds/image/random")
  .then(function(response){
      console.log(response)
      return response.json()
  })
.then(function(data){display(data.message)})
function display(image_url){
    document.getElementById("image").src=image_url
}


btn.addEventListener("click",get_name)
function get_name(){
    test = document.getElementById("test").value
    getAge()
    getGender()
    getNat()
}
function getGender(){
  fetch('https://api.genderize.io?name=' + test)
  .then((response) => response.json())
  .then((data)=>console.log(data.gender))
}
function getAge(){
  fetch('https://api.agify.io/?name=' + test)
  .then((response) => response.json())
  .then((data)=>console.log(data.age))
  // .then(function(){
  //       para.innerHTML = data.age
  //       })
}
function getNat(){
  fetch('https://api.nationalize.io/?name=' + test)
  .then((response) => response.json())
  .then((data)=>console.log(data.country))
  .then(function(data){
    let country= data.country
    let nat_id = country[0].country_id
    if (country.length==1){
        nat_id=country[0].country_id
    }
    else{
        nat_id = country[0].country_id + "and his second nationality is " + country[1].country_id
    }
    console.log(nat_id)
  })
}





async function getNationality(){
    const response = await fetch(' https://api.nationalize.io/?name=' + text)
    const data= await response.json()
    let country= data.country
    let nat_id = country[0].country_id
    if (country.length==1){
        nat_id=country[0].country_id
    }
    else{
        nat_id = country[0].country_id + "and his second nationality is " + country[1].country_id
    }
    console.log(nat_id)
  }