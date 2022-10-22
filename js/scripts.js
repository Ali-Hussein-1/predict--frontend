// Some sections where commented due to bug issues
const btn = document.querySelector("#btn");
const para = document.querySelector("#para");
var test;
const img_url = "https://dog.ceo/api/breeds/image/random";
const gender_url = "https://api.genderize.io?name=";
const age_url = "https://api.agify.io/?name=";
const nat_url = "https://api.nationalize.io/?name=";

// displaying the image
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then(function (data) {
    display(data.message);
  });
function display(image_url) {
  document.getElementById("image").src = image_url;
}

// click event on the button to get age name and gender
btn.addEventListener("click", get_name);
function get_name() {
  test = document.getElementById("test").value;
  getAge();
  getGender();
  getNat();
}
// getting the gender
function getGender() {
  fetch("https://api.genderize.io?name=" + test)
    .then((response) => response.json())
    .then((data) => console.log(data.gender));
}
// getting the age
function getAge() {
  fetch("https://api.agify.io/?name=" + test)
    .then((response) => response.json())
    .then((data) => console.log(data.age));
  // .then(function(){
  //       para.innerHTML = data.age
  //       })
}
// getting the nationality
function getNat() {
  fetch("https://api.nationalize.io/?name=" + test)
    .then((response) => response.json())
    .then((data) => console.log(data.country));
}
//   .then((data) => {
//     let country= data.country
//     let nat_id = country[0].country_id
//     if (country.length==1){
//         nat_id=country[0].country_id
//     }
//     else{
//         nat_id = "the first nationality is" + country[0].country_id + "and the second is " + country[1].country_id
//     }
//     console.log(nat_id)
//   })
// }
