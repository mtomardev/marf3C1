function OpeningCeremony(Race100M){
    setTimeout(()=>{
        console.log("Let the games begin");
        
    },1000)
    let score = {red : 0,blue: 0,green: 0,yellow: 0}
    console.log(score);
    Race100M(score, LongJump)
}

function Race100M(score, LongJump){
    console.log("Previous Score");
    console.log(score);
    setTimeout(()=>{
        
        console.log("Let the Race begin");
        let timeobj = {red : Math.floor(Math.random()*6+10),
            blue: Math.floor(Math.random()*6+10),
            green: Math.floor(Math.random()*6+10),
            yellow: Math.floor(Math.random()*6+10)} 
           
            console.log(timeobj);
            
            score = {red : 50, blue: 25,green: 0,yellow: 0}
            console.log("New Score");
            console.log(score);
            console.log(`winner of 100m race is Red`);
            LongJump(score, HighJump)            
        },3000)
}


    function LongJump(score, HighJump){
        

        setTimeout(() => {
            console.log("Long jump Started");
            console.log("Previous Score");
            console.log(score);
            let arr = ["red", "blue", "green", "yellow"]
            let idx = Math.floor(Math.random()*4);
            console.log(arr[idx]); 

            score[arr[idx]] += 150

        
            console.log("New Score");
            console.log(score);
            console.log(`winner of LongJump is ${arr[idx]}`);
            HighJump(score, AwardCeremony)
        }, 2000);
        
    }

        function HighJump(score, AwardCeremony){
            console.log("HighJump Started");
            console.log("Previous Score");
            console.log(score);
            let hiJump = prompt("What colour secured the highest jump")
             
            if(hiJump == "red"){
                score["red"] +=100;
             }
            else if(hiJump == "blue"){
                score["blue"] +=100;
             }

             else if(hiJump == "green"){
                score["green"] +=100;
             }

             else if(hiJump == "yellow"){
                score["blue"] +=100;
             }

             else{
                console.log("Event was cancelled");
             }
        
             console.log("New Score");
             console.log(score);
             AwardCeremony(score)   
         }

            function AwardCeremony(score){
                console.log("WellCome to award Ceremoney");
                console.log("Score of red "+ score["red"]);
                console.log("Score of blue "+ score["blue"]);
                console.log("Score of green "+ score["green"]);
                console.log("Score of yellow "+ score["yellow"]);
            }


OpeningCeremony(Race100M);

