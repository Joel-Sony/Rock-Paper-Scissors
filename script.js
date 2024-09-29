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
                hchoice.lastElementChild.src="./images/140215.png";
                if(cc=="Rock"){
                    cchoice.lastElementChild.src="./images/140215.png";
                    console.log("Draw");
                    content="It's a Draw";
                }
                else if(cc=='Scissors'){
                    cchoice.lastElementChild.src="./images/140216.png";
                    console.log("You win this Round");
                    content="You win this Round";
                    hscore++;
                }
                else if(cc=='Paper'){
                    cchoice.lastElementChild.src="./images/140217.png";
                    console.log("The Computer wins this round!");
                    container = document.createElement("h2");
                    content="The Computer wins this Round";
                    cscore++;
                }   
                container.textContent=content;
                result.removeChild(result.lastElementChild);
                result.appendChild(container);
                break;
            }
            case("paper"):{
                hchoice.lastElementChild.src="./images/140217.png";
                if(cc=="Paper"){
                    cchoice.lastElementChild.src="./images/140217.png";
                    console.log("Draw");
                    content="It's a Draw";
                }
                else if(cc=='Rock'){
                    cchoice.lastElementChild.src="./images/140215.png";
                    console.log("You win this Round");
                    content="You win this Round";
                    hscore++;
                }
                else if(cc=='Scissors'){
                    cchoice.lastElementChild.src="./images/140216.png";
                    console.log("The Computer wins this round!");
                    content="The Computer wins this Round";
                    cscore++;
                }
                container.textContent=content;
                removal = document.querySelector("#resultRemove")
                result.removeChild(result.lastElementChild);
                result.appendChild(container);
                break;
            }
            case("scissor"):{
                hchoice.lastElementChild.src="./images/140216.png";
                if(cc=="Scissors"){
                    cchoice.lastElementChild.src="./images/140216.png";
                    console.log("Draw");
                    content="It's a Draw";
                }
                else if(cc=='Paper'){
                    cchoice.lastElementChild.src="./images/140217.png";
                    console.log("You win this Round");
                    content="You win this Round";
                    hscore++;
                }
                else if(cc=='Rock'){
                    cchoice.lastElementChild.src="./images/140215.png";
                    console.log("The Computer wins this round!");
                    content="The Computer wins this Round";
                    cscore++;
                }
                container.textContent=content;
                removal = document.querySelector("#resultRemove")
                result.removeChild(result.lastElementChild);

                result.appendChild(container);
            }
        }  
        console.log (`Hscore ${hscore} Cscore: ${cscore}` );
        hscoreBox.lastElementChild.textContent=hscore;
        cscoreBox.lastElementChild.textContent=cscore;
    })
