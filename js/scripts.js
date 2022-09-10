const btn = document.getElementById("btn")
console.log("test")
fetch("https://dog.ceo/api/breeds/image/random")
  .then(function(response){
      console.log(response)
      return response.json()
  })
.then(function(data){display(data.message)})
function display(image_url){
    document.getElementById("image").src=image_url
}

function getGender(){
  fetch('https://api.genderize.io?name=rio')
  .then((response) => response.json())
  .then((data)=>console.log(data.gender))
}
function getAge(){
  fetch('https://api.agify.io/?name=nour')
  .then((response) => response.json())
  .then((data)=>console.log(data.age))
}
function getNat(){
  fetch('https://api.nationalize.io/?name=mohamad')
  .then((response) => response.json())
  .then((data)=>console.log(data.country))
}
getGender()
getAge()
getNat()