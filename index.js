
function superbowlWin(record) { 
    const winningYear = record.find(element => element.result === "W"); 
    if (winningYear) {
        return winningYear.year;
    } else {
        return undefined;
    }
}