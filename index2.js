const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedCheker(input) {
    rl.question('Please enter your speed: ', (input) => {
        const number = parseFloat(input); 

    switch (true) {
        case (number  <70):
            console.log("OK");
            break;
        case (number > 70 && number<75):
            console.log("Points:1");
            break;
        case (number > 75 && number<80):
            console.log("Points:2");
            break;
        case (number > 80 && number<85):
            console.log("Points:3");
               break;
        case (number > 85 && number<90):
            console.log("Points:4");
            break;
        case (number > 90 && number <95) :
            console.log("Points:5");
            break;
        case (number >95 && number <100) :
            console.log("Points:6");
            break;
        case (number>100 && number<105):
            console.log("Points:7");
            break;
        case (number>105 && number<110):
            console.log("Points:8");
            break;
        case (number>110 && number<115):
            console.log("Points:9");
            break;
        case (number>115 && number<120):
            console.log("Points:10");
            break;
        case (number>120 && number<125):
            console.log("Points:11");
            break;
        case(number>125 && number<130):
        console.log("Points:12");
        break;

                           

        default:
            console.log('License suspended');
            break;
    }
    rl.close();
    });
}
speedCheker()
