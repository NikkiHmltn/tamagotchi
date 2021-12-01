
//inner status bars for easier styling
const healthBar = document.querySelector(".style-hp")
const manaBar = document.querySelector(".style-mana")
const staminaBar = document.querySelector(".style-stamina")

//buttons for Bars
const healthBtn = document.querySelector(".health-btn")
const manaBtn = document.querySelector(".mana-btn")
const staminaBtn = document.querySelector(".stamina-btn")

//character info
const nameTag = document.querySelector(".name-tag")
const levelTag = document.querySelector(".level-tag")

const Hero = {
    name: "",
    level: 1,
    health: 100,
    stamina: 100,
    mana: 100,
    evolve(){

    }
}

//large button event to rule them all
const btnEffect= (e) => {
    e.preventDefault();
    console.log(e.target.textContent)
    let btnTarget = e.target.textContent
    if (btnTarget == "Health Potion"){
        if (Hero.health + 25 >= 100) {
            Hero.health = 100
        } else {
            Hero.health += 25
        }
        
    } else if (btnTarget == "Mana Potion"){
        if (Hero.mana + 35 >= 100) {
            Hero.mana = 100
        } else {
            Hero.mana += 25
        }
    } else if (btnTarget == "Stamina Potion") {
        if (Hero.stamina + 30 >= 100) {
            Hero.stamina = 100
        } else {
            Hero.stamina += 30
        }
    } else {
        console.log("something went wrong lol")
    }
}

//add the button event to the buttons
healthBtn.addEventListener("click", btnEffect)
manaBtn.addEventListener("click", btnEffect)
staminaBtn.addEventListener("click", btnEffect)

const healthTimer = setInterval(function(){
    Hero.health--;
    healthBar.style.width=`${Hero.health}%`
    
    if (Hero.health <= 0){
        clearInterval(healthTimer)
    }
}, 400)

const manaTimer = setInterval(function(){
    Hero.mana--;
    manaBar.style.width=`${Hero.mana}%`
    if (Hero.mana <= 0){
        clearInterval(manaTimer)
    }
}, 300)

const staminaTimer = setInterval(function(){
    Hero.stamina--;
    staminaBar.style.width=`${Hero.stamina}%`
    if (Hero.stamina <= 0){
        clearInterval(staminaTimer)
    }
}, 200)

const levelUp = setInterval(function(){
    Hero.level++;
    levelTag.textContent=`${Hero.level}`
    if (Hero.level == 20){
       console.log("leveled up!")
    }
}, 2000)
