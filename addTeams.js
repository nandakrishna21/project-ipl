

var addPlayer = document.querySelector(".addPlayer");




addPlayer.addEventListener("click" , function(e)
{
    e.preventDefault();
var name = document.querySelector(".name").value;
var shortName = document.querySelector(".player_role").value;
var Trophies = document.querySelector(".overseas").value;
var fullImg = document.querySelector(".full_img").value;
var logo = document.querySelector(".price").value;
var batsman = document.querySelector(".batsman").value;
var bowler = document.querySelector(".bowler").value;



    var obj = {
 

    teamFullName: name,
    sName: shortName,
    fullSname: name,
    teamIcon : logo,
    teamImage: fullImg,
    WonCount: Trophies,
    TopBatsman:  batsman,
    TopBowler: bowler,
    }
    console.log(obj)
    addNewItem (obj)
    // return obj;
})
function addNewItem (item) {
    if ("TeamDetails" in localStorage) {
      let teamList = JSON.parse(localStorage.getItem("TeamDetails" ));
      teamList.push(item);

      localStorage.setItem("TeamDetails", JSON.stringify(teamList));
  } 
  
  }



var searchBtn = document.querySelector(".icon")


  // -----Search Bar---
  var searchBar  = document.querySelector(".searchInput")
var searchBtn = document.querySelector(".icon")
var details = JSON.parse(localStorage.getItem("playerDetails", ));
console.log(searchBtn)

searchBar.addEventListener("keyup", function (e){
  var upper = e.target.value.toUpperCase()
  filterData = details.filter((item) => item.from === upper);
  console.log(filterData)
  showSearchedItem(filterData)
  showResult()

});





  function showSearchedItem(value){
   var searchContainer = document.querySelector(".team_container_search")

    value.map((item) => {
        searchContainer.innerHTML +=
        `
        <div class="team_player_search " id=${item.id} >
        <div class="player_img">
          <img src="${item.playerImage}" alt="">
        </div>
        <div class="player_description">
        <h3 class="player_name">${item.playerName}</h3>
        <p class="role">${item.description}</p>
      </div>
      </div>
        `
        var teamBox = document.querySelectorAll(".team_player_search")
        var playerDescription = document.querySelectorAll(".player_description")
        
        if(item.from === "CSK"){
            teamBox.forEach((item) => {
                item.classList.add("csk_color")
            })
            playerDescription.forEach((item) => {
                item.classList.add("mi_color")
            })
        }
            else if(item.from === "GT"){
                teamBox.forEach((item) => {
                    item.classList.add("gt_color")
                })
            }
            else if(item.from === "KKR"){
                teamBox.forEach((item) => {
                    item.classList.add("kkr_color")
                })
            }
            else if(item.from === "MI"){
                teamBox.forEach((item) => {
                    item.classList.add("mi_color")
                })
            }
            else if(item.from === "DC"){
                teamBox.forEach((item) => {
                    item.classList.add("dc_color")
                })
            }
            else if(item.from === "RCB"){
                teamBox.forEach((item) => {
                    item.classList.add("rcb_color")
                })
            }
            else if(item.from === "RR"){
                teamBox.forEach((item) => {
                    item.classList.add("rr_color")
                })
            }
            else if(item.from === "SR"){
                teamBox.forEach((item) => {
                    item.classList.add("sr_color")
                })
            }
            else if(item.from === "PBKS"){
                teamBox.forEach((item) => {
                    item.classList.add("pk_color")
                })
            }
            else if(item.from === "LCG"){
                teamBox.forEach((item) => {
                    item.classList.add("lcg_color")
                })
            }
    })

  }

  function showResult (){
    var result = document.querySelector(".search_box");
    result.style.display = "flex"
  }


  var closeBtn = document.querySelector(".close")
  closeBtn.addEventListener("click" , close)
  function close(){
    var result = document.querySelector(".search_box");
    result.style.display = "none"
  }

