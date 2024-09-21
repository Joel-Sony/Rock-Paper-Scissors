function game(){
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

    function getHumanChoice(){
        let user_choice= prompt("Choose an option [Rock/Paper/Scissors]: ");
        return user_choice;
    }

    function playround(ch,cc){
        if(cc=="Paper"){
            if(ch=="Paper") console.log("Draw");
            else if(ch=="Rock"){
                console.log("The Computer chose Paper!")
                console.log("The Computer won this round");
                cscore++
            }
            else if(ch=="Scissors") {
                hscore++
                console.log("The Computer chose Paper!")
                console.log("You won this round");
            }
        }
        else if(cc=="Rock"){
            if(ch=="Rock") console.log("Draw");
            else if(ch=="Scissors"){
                cscore++;
                console.log("The Computer chose Rock!")
                console.log("The Computer wins this round");
            }
            else if(ch=="Paper"){
                hscore++
                console.log("The Computer chose Rock!")
                console.log("You won this round");
            }
        }
        else if(cc=="Scissors"){
            if(ch=="Scissors") console.log("Draw");
            else if(ch=="Paper") {
                console.log("The Computer chose Scissors!")
                console.log("The Computer wins this round")
                cscore++;
            }
            else if(ch=="Rock"){
                hscore++
                console.log("The Computer chose Scissors!")
                console.log("You won this round");
            }
        }
    }

    let cscore=0,hscore=0;
    for(let i=0;i<9;i++){
        let ch = getHumanChoice();
        let cc = getComputerChoice();
        
        playround(ch,cc);
        console.log(`Current score- Computer:${cscore} You: ${hscore}`);
        if(cscore == "3"){
            console.log("\n\nThe Computer wins the match!");
            break;
        }
        else if (hscore=="3"){
            console.log("\n\nYou Win the match!");
            break;
        }
    }
}

