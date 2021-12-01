
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
const sprite = document.querySelector(".sprite")
const spriteContainer = document.querySelector(".sprite-container")
const childSprite = document.querySelector(".sprite-container").childNodes[3]

//sprite assets for easy access
const evo2 = "./animation/evo2/Run.png"
const evo2Death = "./animation/evo2/Death.png"
const evo3 = "./animation/evo3/Run.png"
const evo3Death = "./animation/evo3/Death.png"


const Hero = {
    name: "",
    level: 30,
    health: 100,
    stamina: 100,
    mana: 100,
    evolve(){
        if (this.level >= 20 && this.level < 40){
            sprite.style.background=`url(${evo2})`
            sprite.style.height="100px"
            sprite.style.width='100px'
            document.documentElement.style.setProperty('--end-width', '-800px');
             spriteContainer.style.top = "20%"
         } else if (this.level >= 40 ) {
             sprite.style.background=`url(${evo3})`
            sprite.style.height="200px"
            sprite.style.width='200px'
            // sprite.style.zoom="2"
            document.documentElement.style.setProperty('--end-width', '-1600px');
             spriteContainer.style.top = "5%"
             spriteContainer.style.left = "20%"
         }
    },
    death(){
        childSprite.classList.remove("sprite")
        childSprite.classList.add("sprite-die")
        const spriteDeath = document.querySelector(".sprite-die")

        console.log(spriteDeath)
        if (this.level >= 20 && this.level < 40){
            spriteDeath.style.background=`url(${evo2Death})`
            spriteDeath.style.height="100px"
            spriteDeath.style.width='100px'
            spriteDeath.style.animation='die 2s steps(10);'
            document.documentElement.style.setProperty('--end-width-death', '-1000px');
            spriteContainer.style.top = "20%"
        } else if (this.level >= 40) {
            spriteDeath.style.background=`url(${evo3Death})`
            spriteDeath.style.height="200px"
            spriteDeath.style.width='200px'
            spriteDeath.style.animation='die steps(6) 1.5s'
            document.documentElement.style.setProperty('--end-width-death', '-1200px');
            spriteContainer.style.top = "5%"
            spriteContainer.style.left = "20%"
        }
    }, 
}

const endGame = () => {
    
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

const intervalFunctions = [];

const healthTimer = setInterval(function(){
    Hero.health--;
    healthBar.style.width=`${Hero.health}%`
    
    if (Hero.health <= 0){
        clearAllIntervals(intervalFunctions)
        Hero.death()
    }
}, 400)

const manaTimer = setInterval(function(){
    Hero.mana--;
    manaBar.style.width=`${Hero.mana}%`
    if (Hero.mana <= 0){
        clearAllIntervals(intervalFunctions)
        Hero.death()
    }
}, 300)

const staminaTimer = setInterval(function(){
    Hero.stamina--;
    staminaBar.style.width=`${Hero.stamina}%`
    if (Hero.stamina <= 0){
        clearAllIntervals(intervalFunctions)
        Hero.death()
    }
}, 200)

const levelUp = setInterval(function(){
    Hero.level++;
    levelTag.textContent=`${Hero.level}`
    Hero.evolve()
}, 2000)

intervalFunctions.push(healthTimer, manaTimer, levelUp, staminaTimer)

const clearAllIntervals = (array) => {
    array.forEach(clearInterval)
}
