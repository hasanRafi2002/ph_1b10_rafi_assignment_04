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

