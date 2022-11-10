// write your code here

const imgMenue = document.getElementById("ramen-menu");

function displayImages(images) {
  images.map((menueInfo) => {
    imgMenue.innerHTML += `<img id=${menueInfo.id} src=${menueInfo.image} />`;
  });
}

function naji () {
    const image = document.querySelectorAll("#ramen-menu img");
    image.forEach((img)=>{
        console.log(img);
    })

}

// function clickedImg(images) {
//   //console.log(image);
//   const imgDisplayed = document.querySelector(".detail-image");
//   images.map((menueInfo) => {
//     for (let i = 0; i < image.length; i++) {
//       image[i].addEventListener("click", () => {
//         console.log("clicked");
//         // console.log(image[i]);
//         if (image[i].id === menueInfo.id) {
//           console.log("naji");
//                 imgDisplayed[i].setAttribute("src", `${menueInfo.image}`);
//                 imgDisplayed[i].setAttribute("name", `${menueInfo.name}`);
//         }
//       });
//     }
//   });
// }

fetch("http://localhost:3000/ramens")
  .then((response) => {
    return response.json(); //why we put return to get the data?
  })
  .then((data) => {
    //console.log(data);
    displayImages(data);
    //clickedImg(data);
    naji();
  });
