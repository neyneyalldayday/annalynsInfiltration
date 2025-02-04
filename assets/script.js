



















































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
});