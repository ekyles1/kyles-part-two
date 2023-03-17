let playerName = prompt(`Welcome to GC mini golf! What is your name?`);

let numberOfHolesForMiniGolf = prompt(`Hi, ${playerName}! Would you like to play 3 times or 6 times?`);

let playerCumulativeScore = 0;

let holeNumber = 1

let parForCourse = numberOfHolesForMiniGolf === '3' ? 9 : 18;

for (let i = numberOfHolesForMiniGolf; i > 0; i--) {
    playerCumulativeScore += parseInt(prompt(`How many puts for hole ${holeNumber++}`));
}

if (playerCumulativeScore > parForCourse) {
    console.log(`Nice try, ${playerName}...Your total par was: +${playerCumulativeScore - parForCourse}.`);
} else if (parForCourse - playerCumulativeScore) {
    console.log(`Great job, ${playerName}! Your total par was: ${playerCumulativeScore - parForCourse}.`);
} else {
    console.log(`Good game, ${playerName}. Your total par was: ${playerCumulativeScore - parForCourse}.`);
}

