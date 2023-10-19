const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final\
// const finalMatchHome2014 = fifaData.find(item => item.Year === 2014 && item.Stage === 'Final');
// if (finalMatchHome2014) {
//     const homeTeam2014Final = finalMatchHome2014['Home Team Name'];
//     console.log( homeTeam2014Final);
// }
// //(b) Away Team name for 2014 world cup final
// const finalMatchAway2014 = fifaData.find(item => item.Year === 2014 && item.Stage === 'Final');
// if (finalMatchAway2014) {
//     const awayTeam2014Final = finalMatchAway2014['Away Team Name'];
//     console.log(awayTeam2014Final)
// }
// //(c) Home Team goals for 2014 world cup final
// if (finalMatchHome2014) {
//     const homeTeam2014FinalScore = finalMatchHome2014['Home Team Goals'];
//     console.log(homeTeam2014FinalScore);
// }
// //(d) Away Team goals for 2014 world cup final
// if (finalMatchAway2014) {
//     const AwayTeam2014FinalScore = finalMatchAway2014['Away Team Goals'];
//     console.log(AwayTeam2014FinalScore);
// }
// //(e) Winner of 2014 world cup final */
// const homeTeam2014FinalScore = finalMatchHome2014['Home Team Goals'];
// const AwayTeam2014FinalScore = finalMatchAway2014['Away Team Goals'];
// if (finalMatchHome2014) {
//     const homeTeam2014FinalScore = finalMatchHome2014['Home Team Goals'];
//     console.log('Home Team Goals for 2014 World Cup Final:', homeTeam2014FinalScore);
// }

// if (finalMatchAway2014) {
//     const awayTeam2014FinalScore = finalMatchAway2014['Away Team Goals'];
//     console.log('Away Team Goals for 2014 World Cup Final:', awayTeam2014FinalScore);
// }

// if (AwayTeam2014FinalScore > homeTeam2014FinalScore ) {
//     console.log(AwayTeam2014FinalScore);
// } else if (homeTeam2014FinalScore > AwayTeam2014FinalScore) {
//     console.log(homeTeam2014FinalScore);
// } else {
//     console.log('It was a draw.');
// }
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    let finalist = []
    for (let i = 0; i < data.length; i++){
        let current = data[i]
        if (current.Stage === 'Final'){
            finalist.push(current)
        }
    }
    return finalist
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data, callback) {
   let finalData = callback(data);
   let years = finalData.map(item => item.Year);
   return years
}

let finalYears = [getYears(fifaData, getFinals)];

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data, callback){
    let winners = [];
    let finalsData = callback(data);

    for (let i = 0; i < finalsData.length; i++) {
        let currentFinal = finalsData[i];
       if (currentFinal["Home Team Goals"] > currentFinal["Away Team Goals"]) {
        winners.push(currentFinal["Home Team Name"]);
       } else {
        winners.push(currentFinal["Away Team Name"]);
       }
    }
    return winners;
}
let finalsWinners = [getWinners(fifaData, getFinals)];


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, getFinals, getYears, getWinners) {
    let winnerYears = [];
    let finalsData = getFinals(data);
    let years = getYears(data, getFinals);
    let winners = getWinners(data, getFinals);

    for (let i = 0; i < finalsData.length; i++) {
        let currentFinal = finalsData[i];
        let year = years[i];
        let winner = winners[i];
        winnerYears.push(`In ${year}, ${winner} won the world cup!`);
    }
    return winnerYears;
}

let winnerYears = getWinnersByYear(fifaData, getFinals, getYears, getWinners);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(callback) {
    let finalsData = callback;
    let totalMatches = finalsData.length;
    
    let totalHomeGoals = finalsData.reduce((total, match) => total + match["Home Team Goals"], 0);
    let totalAwayGoals = finalsData.reduce((total, match) => total + match["Away Team Goals"], 0);

    let averageHomeGoals = (totalHomeGoals / totalMatches).toFixed(2);
    let averageAwayGoals = (totalAwayGoals / totalMatches).toFixed(2);

    return (parseFloat(averageHomeGoals) + parseFloat(averageAwayGoals)).toFixed(2);
}

let averageGoals = getAverageGoals(getFinals(fifaData));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
