//String enums

enum urls {
    "dev"="http://dev.com",
    "prod"="http://qa.com",
    "uat"="http://uat.com"
}


function loadApplication(env:urls){


    //test execution
    console.log(`The execution result is ${env} `);
    

}
loadApplication(urls.uat)

/* ******************************************* */

//numeric enums as the default enums 

enum results {
    "pass"=1,
    "fail", 
// here we need to initilaize the enum member if the previous member is assigned with a "string"
// if we  initilaize the enum member witha number thers is no need for initilaization the suceeding member
    "skip"
}

console.log(results.skip);

//heterogenius enum

enum browserStatus {
    "launched"="LAUNCHED",
    "failedLaunch"="FAILURE", 
// here we need to initilaize the enum member if the previous member is assigned with a "string"
// if we  initilaize the enum member witha number thers is no need for initilaization the suceeding member
    "crash"=2
}

console.log(browserStatus.crash);