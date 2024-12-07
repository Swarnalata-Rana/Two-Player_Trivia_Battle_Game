document.getElementById("startGame").addEventListener("click", function () {
    // grt values
    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;
    // alert(player1)
    // alert(player2)
    // displya value
    document.getElementById("player1Name").textContent = `player1 ${player1}`;
    document.getElementById("player2Name").textContent = `player2 ${player2}`;
    //dispaly name and catagory section and the btn as well
    document.getElementById("displayNames").classList.remove("hidden")
    document.querySelector(".category-selection").classList.remove("hidden");
    //hide the input box
    document.querySelector(".input-box").style.display = "none";
    // get select catgory
    document.getElementById("selectCategory").addEventListener("click", function () {
        const category = document.getElementById("categorySelect").value;
        // display Que..
        document.querySelector(".question-box").classList.remove("hidden");
        document.getElementById("question-easy1").textContent = `Type of question category ${category} `;
        document.getElementById("question-easy2").textContent = `Type of question category ${category} `;
        //disply submit btn
        document.querySelector(".score-board").classList.remove("hidden");
        //click ubmit btn 
        document.getElementById("submitGame").addEventListener("click", function () {
            document.querySelector(".game-over").classList.remove("hidden")
        })
    })
})
