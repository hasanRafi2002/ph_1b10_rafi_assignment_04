



function calculateTax(income, expense) {
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }else{
        
    let difference = income - expense;
    let tax = difference * 0.2;
    return tax;
    }
}







function sendNotification(email){
    if(typeof email!=='string' || !email.includes('@')){
        return "Invalid Email";

    }else{
        let [userName, domainName] = email.split('@');
        let as =9;

        if(userName && domainName){
           return userName+" sent you an email from "+domainName;
        }else{
            return "Invalid Email"
        }
    }
}












function checkDigitsInName(myName){

    if(typeof myName !== 'string'){
        return "Invalid Input";

    }else{
        for(let i=0; i<myName.length; i++){
            if (myName[i] >= '0' && myName[i] <= '9' && myName[i] !== ' ') {
                return true;
            }
        }
        }
        
        return false
    }








function calculateFinalScore(obj){
        if(typeof obj!=='object' || typeof obj.name!=='string' || typeof obj.testScore!=='number' || obj.testScore>50 || obj.testScore<0 || typeof obj.schoolGrade!=='number' || obj.schoolGrade>30 || obj.schoolGrade<0 || typeof obj.isFFamily!== 'boolean'){
            return "Invalid Input";
        }else{
    
            let finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20:0);
            return finalScore >= 80;
        }
    
    }













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





    