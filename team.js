window.addEventListener("load", () => {
  loadData();
  loadTeamData();
});

function getID() {
  var id = JSON.parse(localStorage.getItem("card_id"));
  return id;
}

var localID = getID();
console.log(localID);

var playerData = JSON.parse(localStorage.getItem("playerDetails"));
var teamData = JSON.parse(localStorage.getItem("TeamDetails"));

var filterData = playerData.filter((item) => item.from == localID);
var filterTeam = teamData.filter((item) => item.sName === localID);

console.log(filterData);

var TeamContainer = document.querySelector(".team_container");

function loadData() {
  filterData.map((item) => {
    TeamContainer.innerHTML += `
        <a href="./playerDetails.html" class="team_player" id=${item.id} >
        <div class="player_img">
          <img src="${item.playerImage}" alt="">
        </div>
        <div class="player_description">
        <h3 class="player_name">${item.playerName}</h3>
        <p class="role">${item.description}</p>
      </div>
      </a>
        `;

    var teamBox = document.querySelectorAll(".team_player");
    var playerDescription = document.querySelectorAll(".player_description");

    if (item.from === "CSK") {
      teamBox.forEach((item) => {
        item.classList.add("csk_color");
      });
      playerDescription.forEach((item) => {
        item.classList.add("mi_color");
      });
    } else if (item.from === "GT") {
      teamBox.forEach((item) => {
        item.classList.add("gt_color");
      });
    } else if (item.from === "KKR") {
      teamBox.forEach((item) => {
        item.classList.add("kkr_color");
      });
    } else if (item.from === "MI") {
      teamBox.forEach((item) => {
        item.classList.add("mi_color");
      });
    } else if (item.from === "DC") {
      teamBox.forEach((item) => {
        item.classList.add("dc_color");
      });
    } else if (item.from === "RCB") {
      teamBox.forEach((item) => {
        item.classList.add("rcb_color");
      });
    } else if (item.from === "RR") {
      teamBox.forEach((item) => {
        item.classList.add("rr_color");
      });
    } else if (item.from === "SR") {
      teamBox.forEach((item) => {
        item.classList.add("sr_color");
      });
    } else if (item.from === "PBKS") {
      teamBox.forEach((item) => {
        item.classList.add("pk_color");
      });
    } else if (item.from === "LCG") {
      teamBox.forEach((item) => {
        item.classList.add("lcg_color");
      });
    }

    var playerCard = document.querySelectorAll(".team_player");
    playerCard.forEach((item) =>
      item.addEventListener("click", function (e) {
        var id = e.currentTarget.id;
        var filterSinglePlayer = playerData.filter((item) => item.id == id);
        saveSingleData(filterSinglePlayer);
      })
    );
  });
}
function saveSingleData(value) {
  localStorage.setItem("single", JSON.stringify(value));
}
function loadTeamData() {
  var team = document.querySelector(".container");

  filterTeam.map((item) => {
    team.innerHTML = `
<div class="slides">
<div class="overlay"></div>
       <img src="${item.teamImage}" alt="">
        <div class="team_Info_container" >
          <div class="team_box">
            <p >Team Name : ${item.fullSname}</p>
            <div class="team_info_logo"><p></p><img class="team_logo" src="${item.teamIcon}" alt=""></div>
            <p>Top Batsman : ${item.TopBatsman}</p>
            <p>Top Bowler : ${item.TopBowler}</p>
            <p><i class="fa-solid fa-trophy"></i> ${item.WonCount} Winnings</p>
      </div>

      </div>
     
    </div>
`;
  });
}

// -----Search Bar---
var searchBar = document.querySelector(".searchInput");
var searchBtn = document.querySelector(".icon");
var details = JSON.parse(localStorage.getItem("playerDetails"));
console.log(searchBtn);

searchBar.addEventListener("keyup", function (e) {
  var upper = e.target.value.toUpperCase();
  filterData = details.filter((item) => item.from === upper);
  console.log(filterData);
  showSearchedItem(filterData);
  showResult();
});

function showSearchedItem(value) {
  var searchContainer = document.querySelector(".team_container_search");

  value.map((item) => {
    searchContainer.innerHTML += `
         <div class="team_player_search " id=${item.id} >
         <div class="player_img">
           <img src="${item.playerImage}" alt="">
         </div>
         <div class="player_description">
         <h3 class="player_name">${item.playerName}</h3>
         <p class="role">${item.description}</p>
       </div>
       </div>
         `;
    var teamBox = document.querySelectorAll(".team_player_search");
    var playerDescription = document.querySelectorAll(".player_description");

    if (item.from === "CSK") {
      teamBox.forEach((item) => {
        item.classList.add("csk_color");
      });
      playerDescription.forEach((item) => {
        item.classList.add("mi_color");
      });
    } else if (item.from === "GT") {
      teamBox.forEach((item) => {
        item.classList.add("gt_color");
      });
    } else if (item.from === "KKR") {
      teamBox.forEach((item) => {
        item.classList.add("kkr_color");
      });
    } else if (item.from === "MI") {
      teamBox.forEach((item) => {
        item.classList.add("mi_color");
      });
    } else if (item.from === "DC") {
      teamBox.forEach((item) => {
        item.classList.add("dc_color");
      });
    } else if (item.from === "RCB") {
      teamBox.forEach((item) => {
        item.classList.add("rcb_color");
      });
    } else if (item.from === "RR") {
      teamBox.forEach((item) => {
        item.classList.add("rr_color");
      });
    } else if (item.from === "SR") {
      teamBox.forEach((item) => {
        item.classList.add("sr_color");
      });
    } else if (item.from === "PBKS") {
      teamBox.forEach((item) => {
        item.classList.add("pk_color");
      });
    } else if (item.from === "LCG") {
      teamBox.forEach((item) => {
        item.classList.add("lcg_color");
      });
    }
  });
}

function showResult() {
  var result = document.querySelector(".search_box");
  result.style.display = "flex";
}

var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", close);
function close() {
  var result = document.querySelector(".search_box");
  result.style.display = "none";
}
