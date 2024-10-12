function waitingTime(waitingTimes, serialNumber){
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length || waitingTimes.some(isNaN)) {
        return "Invalid Input";
    }else{
    
    let totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    let averageTime = Math.round(totalTime / waitingTimes.length);
    let peopleLeft = serialNumber - waitingTimes.length - 1;

    return peopleLeft * averageTime;
    }
}





