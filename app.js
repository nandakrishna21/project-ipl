window.addEventListener("load", () => {
    infiniteSlider();
    captureID();
  });
  
  function infiniteSlider() {
    var Container = document.querySelector(".container");
    var slide = document.querySelector(".slides");
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelector(".dots");
    var dot = document.querySelectorAll(".dot")
    var index = 1;
    var time = 3000;
    let automaticSlide;
  
    var firstClone = slides[0].cloneNode(true);
    var lastClone = slides[slides.length - 1].cloneNode(true);
  
    firstClone.id = "firstClone";
    lastClone.id = "lastClone";
  
    slide.append(firstClone);
    slide.prepend(lastClone);
  
    var slideWidth = slides[index].clientWidth;
  
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  
  
  
    function Controls() {
     
      
      dot.forEach((item) =>
      
        item.addEventListener("click", function () {
          index = item.id;
          slide.style.transition = "none";
        })
      );
    }
    Controls();
  
  
    function changeSlide() {
      slides = document.querySelectorAll(".slide");
      automaticSlide = setInterval(() => {
        nextSlide();
      }, time);
    }
  
    function nextSlide() {
      slides = document.querySelectorAll(".slide");
      if (index >= slides.length - 1) return;
      index++;
      slide.style.transition = ".7s ease-out";
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
  
 
    }
  
    slide.addEventListener("transitionend", () => {
      slides = document.querySelectorAll(".slide");
      console.log(slide);
      if (slides[index].id === firstClone.id) {
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    });
  
    changeSlide();
  }



  function captureID(value){
    var cardBox = document.querySelectorAll(".card_box");
    cardBox.forEach((item) => item.addEventListener("click", function(e){
     
      var id = e.currentTarget.id;
      localStorage.setItem('card_id', JSON.stringify(id))
    }))
  }
  





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

