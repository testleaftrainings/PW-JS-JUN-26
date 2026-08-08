


/* 5 points to do API testing:

1. Endpoint : Dev Doc.
2. CRUD : POST, GET,...
3. Authorization : OAuth , Username and Password
4. Header : Content-Type : application/json
5. Request Body

*/


/* In JIRA we will be using => axios instead of request fixture */


import axios from "axios"

async function createIssue() {


    const reponse = await axios.post("https://manual-testing-demoproject.atlassian.net/rest/api/2/issue",
        {
            /* ******Request Body**** */
            "fields": {
                "project": {
                    "key": "JUN"
                },
                "issuetype": {
                    "name": "Bug"
                },
                "summary": "Login Page Bug created using Playwright with API",
                "description": "The login functionationality is a blocker"
            }
        },

            /*****HEADERS***** */
        {
            headers: {
                "Content-Type": "application/json"
            },

            /* **Authorization *****/

            auth: {
                "username": "ravindranr90@gmail.com",
                "password": "ATATT3xFfGF0VhO9QPs7Q7JOHq-8DJcJWmbpWRs09CzJ1EDr_0VKHjqTGsr0aXRGKhujcWATajkRLM34Zkyd2u9q9kU0QUXnPUgafGxxwO8nhtRCMHa7yhVBmsNA_uSHYX4wIBEbxGIG704KBDFvLQRwxqqnYbmdwJ6tfQ4dJrJFqT4RBjOsTXw=425BB83A"
            }
        }
    
    )

    console.log(reponse.data);
    
}

createIssue()