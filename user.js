let response;
let userInfo;
async function testApi() {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    userInfo = await response.json();
    console.log(userInfo);
    console.log(userInfo[0].id);
    console.log(userInfo[0].name);
    console.log(userInfo[0].username);
    console.log(userInfo[0].address);
    console.log(userInfo[0].company);
    console.log(userInfo[0].email);
    console.log(userInfo[0].phone);
    console.log(userInfo[0].website);
    
    return userInfo; // userInfo'yu döndür
  } catch (error) {
    console.log(error);
    return null; // Hata durumunda null döndür
  }
}
testApi().then(

  userInfo => { // testApi çağrısı tamamlandıktan sonra
  const userCard = document.getElementById("contents");
  userCard.innerHTML = userInfo.map((user) => 
    `
    <div class="card shadow-sm  my-3" style="width: 100%;">

    <div class="cartHead"> 
    <span>
    <img src="./image/profilAvatar.png"> 
     ${user.name} 
   </span>
    <span>
    ${user.id} - ${user.username}
    </span>

    </div>


    <div class="cardBody hidden">
     
     <div>
     <h6><i class="fa-regular fa-address-book"></i>Address</h6>
     <p> <b>Street:</b> ${user.address.street}, <b>Suite:</b> ${user.address.suite}, <b>City:</b> ${user.address.city}, <b>Zip Code:</b> ${user.address.zipcode} <b>Geo:</b> ${user.address.geo.lat} ${user.address.geo.lng}</p>
     </div>
     
      <div>
      <h6><i class="fa-regular fa-building"></i>Company</h6>
      <p><b>Name:</b> ${user.company.name}, <b>CatchPhrase:</b> ${user.company.catchPhrase}, <b>BS</b> ${user.company.bs}</p>
      </div>
     
      <div>
      <h6><i class="fa-regular fa-envelope"></i>Mail</h6>
      <p>${user.email}</p>
      </div>
      
      <div>
      <h6><i class="fa-solid fa-phone"></i>Phone</h6>
      <p>${user.phone}</p>
      </div>
     
      <div>
      <h6><i class="fa-brands fa-github"></i>Web Site</h6>
      <p>${user.website}</p>
      </div>

      </div>
     
      <i class="fa-solid fa-caret-down toggleArrow""></i>
 
     
  </div>
    `
  ).join("");


  function addToggleListeners() {
    const toggleArrows = document.querySelectorAll(".toggleArrow");
    toggleArrows.forEach((item) => {

      item.addEventListener("click", function () {
        const userInfo = this.closest(".card").querySelector(".cardBody");
        userInfo.classList.toggle("hidden");
  
        
        if (userInfo.classList.contains("hidden")) {
          item.style.transform = "rotate(0deg)";
          item.style.color = "#416fd3"; //mavi
        } else {
          item.style.transform = "rotate(180deg)";
          item.style.color = "#ff3b1f"; //kırmızı
        }

      });
    });
  }
  
  addToggleListeners();
  
console.log(userInfo);


});




