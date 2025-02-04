const outcomeContainer = document.querySelector(".outcome");
document.querySelector("#refresh").addEventListener("click", () => {
    document.location.reload()
})



document.addEventListener('DOMContentLoaded', function() {
    const numVariables = 4;
    const boolArray = [];
    
    for (let i = 0; i < numVariables; i++) {
        boolArray.push(Math.random() > 0.5);
    }
    
    for (let i = 0; i < numVariables; i++) {
        let [variableName] = ['knightIsAwake', 'archerIsAwake', 'prisonerIsAwake', 'petDogIspresent'].slice(i);
        window[variableName] = boolArray[i];
    }
    
    console.log("knightAwake ->",knightIsAwake, "archerAwake ->", archerIsAwake, "prisonerAwake ->",prisonerIsAwake, "petdog ->", petDogIspresent); 


   const createElement = () => {
    const situationContainer = document.createElement("div")
    situationContainer.setAttribute("class", "card")
    
    return situationContainer
   }

   

    const canExecuteFastAttack = () => {
        let attackElement = ""
        let dontAttackElement = ""
           if(knightIsAwake) {
            attackElement = createElement() 
            attackElement.innerHTML = "annalyn smacked that fool"
            outcomeContainer.appendChild(attackElement)
            console.log("annalyn smacked that fool");
           } else {
            dontAttackElement = createElement()
            dontAttackElement.innerHTML = "annalyn cant smack that fool"
            outcomeContainer.appendChild(dontAttackElement)
            console.log("annalyn cant smack that fool");
           }
        
       }
       
    const canSpy = () => {
        let spyElement = "";
        let dontSpyElement = "";
        let carefulElement = "";
        let busterElement = "";

        if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake ) {
            spyElement = createElement();
            spyElement.innerHTML = "annalyn can spy on the situation"
            outcomeContainer.appendChild(spyElement)
            console.log("annalyn can spy on the situation")
        } else if (knightIsAwake && archerIsAwake && prisonerIsAwake) {
            dontSpyElement = createElement();
            dontSpyElement.innerHTML = "dont spy right now annalyn"
            outcomeContainer.appendChild(dontSpyElement)
            console.log("dont spy right now foo")
        } else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake ) {
            carefulElement = createElement()
            carefulElement.innerHTML = "annalyn be careful"
            outcomeContainer.appendChild(carefulElement)
            console.log("be careful")
        } else {
            busterElement = createElement()
            busterElement.innerHTML = "annalyn, some buster is awake"
            outcomeContainer.appendChild(busterElement)
            console.log("some buster is awake")
        }
        
    } 

    const canSignalPrisoner = () => {
        let canSignalElement = ""
        let cantSignalElement = ""
        if (!archerIsAwake && prisonerIsAwake) {
            canSignalElement = createElement()
            canSignalElement.innerHTML = "annalyn can signal her homie"
            outcomeContainer.appendChild(canSignalElement)
            console.log("annalyn can signal her homie")
        } else  {
            cantSignalElement = createElement()
            cantSignalElement.innerHTML = "annalyn will get caught if she tries to signal her homie"
            outcomeContainer.appendChild(cantSignalElement)
            console.log("annalyn will get caught if she tries to signal her homie")
        }
        
    }

    const canFreePrisoner = () => {
        let canFree = ""
        let cantFree = ""
        if (!knightIsAwake && !archerIsAwake && petDogIspresent && prisonerIsAwake) {
            canFree = createElement()
            canFree.innerHTML = "annalyn sends her doggie pal to free the punk ass prisoner"
            outcomeContainer.appendChild(canFree)
                console.log("annalyn sends her doggie pal to free the punk ass prisoner")
        } else {
            cantFree = createElement()
            cantFree.innerHTML = "annalyn cant free shit."
            outcomeContainer.appendChild(cantFree)
            console.log("cant free shit.")
        }
       
    }
       
       canFreePrisoner(knightIsAwake ,archerIsAwake ,petDogIspresent ,prisonerIsAwake);
       canSignalPrisoner(archerIsAwake, prisonerIsAwake);
       canSpy(knightIsAwake, archerIsAwake,prisonerIsAwake);
       canExecuteFastAttack(knightIsAwake);
});