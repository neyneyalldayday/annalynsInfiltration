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


    const canExecuteFastAttack = () => {
                knightIsAwake? console.log("annalyn smacked that fool") : console.log("annalyn cant smack that fool");
       }
       
    const canSpy = () => {
        if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake ) {
            console.log("annalyn can spy on the situation")
        } else if (knightIsAwake && archerIsAwake && prisonerIsAwake) {
            console.log("dont spy right now foo")
        } else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake ) {
            console.log("be careful")
        } else {
            console.log("some buster is awake")
        }
        
    } 

    const canSignalPrisoner = () => {
        if (!archerIsAwake && prisonerIsAwake) {
            console.log("annalyn can signal her homie")
        } else  {
            console.log("annalyn will get caught if she tries to signal her homie")
        }
        
    }

    const canFreePrisoner = () => {
        if (!knightIsAwake && !archerIsAwake && petDogIspresent && prisonerIsAwake) {
                console.log("annalyn sends her doggie pal to free the punk ass prisoner")
        } else {
            console.log("cant free shit.")
        }
       
    }
       
       canFreePrisoner(knightIsAwake ,archerIsAwake ,petDogIspresent ,prisonerIsAwake);
       canSignalPrisoner(archerIsAwake, prisonerIsAwake);
       canSpy(knightIsAwake, archerIsAwake,prisonerIsAwake);
       canExecuteFastAttack(knightIsAwake);
});