    let button = document.querySelector(".choiceBoxContainer"); 
    let result = document.querySelector(".result");
    let hscoreBox = document.querySelector("#humanScoreBox");
    let cscoreBox = document.querySelector("#computerScoreBox");
    let hchoice = document.querySelector(".hchoice");
    let cchoice = document.querySelector(".cchoice");

    let cscore=0;
    let hscore=0;

    function getComputerChoice(){
        let choice=Math.random()
        let cc;
        if(choice<=0.33){
        cc =("Paper");
        }
        else if(choice<=0.66){
            cc= ("Rock");
        }
        else cc= ("Scissors");
        return cc;
    }
    button = addEventListener("click",(event)=>{
        let target = event.target;
        let cc= getComputerChoice();
        console.log(`human: ${target.id} copmuter: ${cc} `);
        let container = document.createElement("h2");
        let content='';
        let removal=document.querySelector("#resultRemove")
        switch(target.id){
            case("rock"):{
                if(cc=="Rock"){
                    console.log("Draw");
                    let content="It's a Draw";
                    
                }
                else if(cc=='Scissors'){
                    console.log("You win this Round");
                    content="You win this Round";
                    hscore++;
                }
                else if(cc=='Paper'){
                    console.log("The Computer wins this round!");
                    let container = document.createElement("h2");
                    content="The Computer wins this Round";
                    cscore++;
                }   
                container.textContent=content;
                removal = document.querySelector("#resultRemove")
                console.log(`removal: ${removal}`);
                result.removeChild(removal);
                result.appendChild(container);
                break;
            }
            case("paper"):{
                if(cc=="Paper"){
                    console.log("Draw");
                    content="It's a Draw";
                    
                }
                else if(cc=='Rock'){
                    console.log("You win this Round");
                    content="You win this Round";
                    hscore++;
                }
                else if(cc=='Scissors'){
                    console.log("The Computer wins this round!");
                    content="The Computer wins this Round";
                    cscore++;
                }
                container.textContent=content;
                removal = document.querySelector("#resultRemove")
                result.removeChild(removal);
                result.appendChild(container);
                break;
            }
            case("scissor"):{
                if(cc=="Scissors"){
                    console.log("Draw");
                    let content="It's a Draw";
                }
                else if(cc=='Paper'){
                    console.log("You win this Round");
                    content="You win this Round";
                    hscore++;
                }
                else if(cc=='Rock'){
                    console.log("The Computer wins this round!");
                    content="The Computer wins this Round";
                    cscore++;
                }
                container.textContent=content;
                removal = document.querySelector("#resultRemove")
                result.removeChild(removal);
                result.appendChild(container);
            }
        }
        result = document.querySelector(result.lastElementChild);
        result.id="resultRemove";  
        console.log (`Hscore ${hscore} Cscore: ${cscore}` );
    })
