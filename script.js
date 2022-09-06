const startButton = document.querySelector(".startButton")
const body = document.querySelector("body")
const start = document.querySelector(".start")
const howToPlay = document.querySelector(".howToPlay")
const game = document.querySelector(".game")
const startGameButton = document.querySelector(".startGame")
const gameContainer = document.querySelector(".game-container")
const indicator = document.querySelector(".indicator")
const submit = document.querySelector(".submit")
const close = document.querySelector(".close");
const popUp = document.querySelector(".popUp");
const information = document.querySelector(".information");
const timerCount = document.querySelector(".time");
const final = document.querySelector(".final");
const more = document.querySelector(".More");
const icon = document.querySelector(".icon");
const text = document.querySelector(".text");
const restart = document.querySelector(".restart");
const finalTitle = document.querySelector(".final-title")

let startGame
let chosen1
let chosen2
let chosen3
let totalChosen

let chosen1Name
let chosen2Name
let chosen3Name

let wrongAnswer;
let random
let score;
let time;
let setOnce;
let current;

const rightItems = [
    {name: "Efficient Lighting",image:"./img/EfficientLighting.png"},
    {name: "Living Wall",image:"./img/LivingWall.png"},
    {name: "Roof Top",image:"./img/RoofTop.png"},
    {name: "Solar Panel",image:"./img/SolarPanel.png"},
    {name: "Shading Panels",image:"./img/ShadingPanels.png"},
    {name: "Displacement Cooling",image:"./img/DisplacementCooling.png"}]

const wrongItems = [
    {name: "Fan",image:"./img/Fan.png", info: "Fan is not an elements to build a zero energy building because fan is an electric appliances."},
    {name: "Radio",image:"./img/Radio.png", info:"Radio is not an elements to build a zero energy building because radio is an electric appliances."}]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    howToPlay.classList.remove("hide")
    body.style.backgroundColor = "#E7F7F5"
})

startGameButton.addEventListener("click", () => {
    howToPlay.classList.add("hide")
    game.classList.remove("hide")
    body.style.backgroundColor = "#F0E6C2"
    time = 30
    current = 0
    score = 0
    wrongAnswer = null
    setOnce = false
    random = Math.floor(Math.random() * wrongItems.length)
    Question()
})

restart.addEventListener("click", () => {
    final.classList.add("hide")
    body.style.backgroundColor = "#F0E6C2"
    time = 30
    current = 0
    score = 0
    timerCount.innerHTML = `${time}s`;
    wrongAnswer = null
    random = Math.floor(Math.random() * wrongItems.length)
    Question()
  })

submit.addEventListener("click", () => {
    if(chosen3 == null){
        return
    }
    console.log(chosen1Name)
    console.log(chosen2Name)
    console.log(chosen3Name)
    console.log(wrongAnswer.name)
    if(chosen1Name == wrongAnswer.name || chosen2Name == wrongAnswer.name || chosen3Name == wrongAnswer.name){
        popUp.classList.remove("hide")
        startGame = false
        information.innerHTML =`
            <img src="${wrongAnswer.image}">
            <h1>${wrongAnswer.name}</h1>
            <p>${wrongAnswer.info}</p>`
        return
    }
    else{
        score = score + 1
        Question()
    }
})

close.addEventListener("click", () => {
    popUp.classList.add("hide")
    Question()
})
function Question(){

    if(chosen1 != null){
        chosen1.classList.remove("choosen")
        chosen2.classList.remove("choosen")
        chosen3.classList.remove("choosen")
        chosen1Name = null
        chosen2Name = null
        chosen3Name = null
    }
    totalChosen = 0
    chosen1 = null
    chosen2 = null
    chosen3 = null
    startGame = true

    if(current == 2){
        if(score == current){
            startGame = false
            final.classList.remove("hide")
            body.style.backgroundColor = "#F4B95C"
            final.style.backgroundColor = "#F4B95C"
            text.style.backgroundColor = "#3070C4"
            text.style.color = "white"
            more.style.backgroundColor = "white"
            more.style.color = "#60A478"
            more.innerHTML = ` 
            <p class="Moretext">Find out how <br> ZEB’s work</p>
            <img src="./img/arrow-green.png">`
            finalTitle.innerHTML =`
            <img class="title-final" src="./img/win.png">`
            icon.innerHTML = `
              <img src="./img/awesome.png">
              <p>Awesome!</p>`
              return
        }
        else{
            startGame = false
              final.classList.remove("hide")
              body.style.backgroundColor = "#3070C4"
              final.style.backgroundColor = "#3070C4"
              text.style.backgroundColor = "white"
              text.style.color = "black"
              more.style.backgroundColor = "#F4B95C"
              more.style.color = "black"
              more.innerHTML = ` 
              <p class="Moretext">Find out how <br> we do</p>
              <img src="./img/arrow-black.png">`
              finalTitle.innerHTML =`
              <img class="title-final" src="./img/lose.png">`
              icon.innerHTML = `
                <img src="./img/keepItUp.png">
                <p>Keep it up!</p>`
              return
        }
        
    }
    current++;

    indicator.innerHTML = `
    <p>Choose 3</p>
    <p>${totalChosen}/3</p>`
    
    let choice1Index = Math.floor(Math.random() * rightItems.length)
    let choice2Index = Math.floor(Math.random() * rightItems.length)
    let choice3Index = Math.floor(Math.random() * rightItems.length)
    let wrongIndex;

    if(random == 0){
        if(wrongAnswer == null){
            wrongIndex = 0
        }
        else{
            wrongIndex = 1
        }
    }
    else{
        if(wrongAnswer == null){
            wrongIndex = 1
        }
        else{
            wrongIndex = 0
        }
    }
    
    
    for(let i = 0; i < 10; i++){
        if(choice1Index == choice2Index || 
            choice1Index == choice3Index || 
            choice2Index == choice3Index){
                choice1Index = Math.floor(Math.random() * rightItems.length)
                choice2Index = Math.floor(Math.random() * rightItems.length)
                choice3Index = Math.floor(Math.random() * rightItems.length) 
            }
    }

    let choice1 = rightItems[choice1Index]
    let choice2 = rightItems[choice2Index]
    let choice3 = rightItems[choice3Index]
    let choice4 = wrongItems[wrongIndex]    
    wrongAnswer = choice4
    console.log(wrongAnswer)
    
    let allChoice = [ choice1, choice2, choice3, choice4]
    
    console.log(choice1)
    allChoice.reverse();

    for (let i=0; i < allChoice.length; i++){
        let j = Math.floor(Math.random() * allChoice.length)

        //swap
        let tmp = allChoice[i]
        allChoice[i] = allChoice[j]
        allChoice[j] = tmp
    }

    if(setOnce == false){
        for (let i = 0; i < allChoice.length; i ++){
            let current = ".btn" + (i + 1)
            let btn = document.querySelector(current)
            btn.innerHTML = `
            <img src="${allChoice[i].image}">
            <p>${allChoice[i].name}</p>`
            btn.setAttribute("data", allChoice[i].name)
            
            console.log(totalChosen)
            console.log(chosen1)
    
            btn.addEventListener("click", () => {
                console.log(allChoice)
                let name = btn.getAttribute("data")
                if(chosen1 == btn || chosen2 == btn || chosen3 == btn){
                    if(chosen1 == btn){
                        chosen1 = null
                        chosen1Name = null
                        console.log("1")
                        btn.classList.remove("choosen")
                    }
                    else if(chosen2 == btn){
                        chosen2 = null
                        chosen2Name = null
                        console.log("2")
                        btn.classList.remove("choosen")
                    }
                    else if(chosen3 == btn){
                        chosen3 = null
                        chosen3Name = null
                        console.log("3")
                        btn.classList.remove("choosen")
                    }
                    totalChosen = totalChosen - 1
                    indicator.innerHTML = `
                        <p>Choose 3</p>
                        <p>${totalChosen}/3</p>`
                    return
                    }
                    if(totalChosen < 3){
                        if(chosen1 == null){
                            chosen1 = btn
                            chosen1Name = name
                            btn.classList.add("choosen")
                        }
                        else if(chosen2 == null){
                            chosen2 = btn
                            chosen2Name = name
                            btn.classList.add("choosen")
                        }
                        else if(chosen3 == null){
                            chosen3 = btn
                            chosen3Name = name
                            btn.classList.add("choosen")
                        }
                        totalChosen = totalChosen + 1
                        indicator.innerHTML = `
                            <p>Choose 3</p>
                            <p>${totalChosen}/3</p>`
                        }
            })
        }
        setOnce = true
    }
    else{
        for (let i = 0; i < allChoice.length; i ++){
            let current = ".btn" + (i + 1)
            let btn = document.querySelector(current)
            btn.innerHTML = `
            <img src="${allChoice[i].image}">
            <p>${allChoice[i].name}</p>`
            btn.setAttribute("data", allChoice[i].name)
        }
    }
}

function updateCountDown(){
    console.log(startGame)
      if(startGame == true){
          if(time == 0){
              startGame = false
              final.classList.remove("hide")
              body.style.backgroundColor = "#3070C4"
              final.style.backgroundColor = "#3070C4"
              text.style.backgroundColor = "white"
              text.style.color = "black"
              more.style.backgroundColor = "#F4B95C"
              more.style.color = "black"
              more.innerHTML = ` 
              <p class="Moretext">Find out how <br> we do</p>
              <img src="./img/arrow-black.png">`
              finalTitle.innerHTML =`
              <img class="title-final" src="./img/lose.png">`
              icon.innerHTML = `
                <img src="./img/timeout.png">
                <p>Timeout</p>`
              return
          }
          time--;
          timerCount.innerHTML = `${time}s`;
      }
  }
  setInterval(updateCountDown, 1000)