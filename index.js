function superbowlWin(record){
    if(record.find(element => element.result === "W")){
        return record.find(element => element.result === "W").year
    } else {
        return undefined
    }
}

