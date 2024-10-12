
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



