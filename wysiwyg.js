let theDons = [{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
        {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
 {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}]

let input = document.getElementById("inputField");
let cardArea = document.getElementById("cardArea");
let eachCard = document.getElementsByClassName("eachCard");
let eachBio = document.getElementsByClassName("eachBios");


function Dom() {
    for (let i = 0; i < theDons.length; i++) {
        let oneDon = theDons[i];
     
        makeCard(oneDon);
    }
  
    changeClick();
}


function makeCard(oneDon) {
    cardArea.innerHTML += `<div class="eachCard">
    <h2>${oneDon.name}</h2>
    <p class="eachBios">${oneDon.bio}
            </p><img src="${oneDon.image}"
        </section>
        <footer>${oneDon.lifespan.birth}-${oneDon.lifespan.death}</footer>
    </div><br>`
};

Dom();
changeClick();


function changeClick(thisCard) {
    for (let i = 0; i < eachCard.length; i++) {
        let thisCard = eachCard[i];
        let thisBio = eachBio[i];
        thisCard.addEventListener("click", function() {
            removeClass();
            thisCard.classList.add("selectedCard");
            input.value = "";
            input.focus();
            changeBio(thisCard, thisBio);
        })
    }
};

function removeClass() {
    for (let i = 0; i < eachCard.length; i++) {
        eachCard[i].classList.remove("selectedCard");
    }
}

function changeBio(thisCard, thisBio) {
    input.addEventListener("keyup", function(enter) {
        if (thisCard.classList.contains("selectedCard")) {
            let newBio = enter.currentTarget.value;
            thisBio.innerHTML = newBio;
            if (enter.keyCode === 13) {
                thisBio.innerHTML = newBio;
                input.value = "";
            }
        }
    })
};
