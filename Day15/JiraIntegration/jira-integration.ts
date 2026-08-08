import axios from "axios"

const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username ="ravindranr90@gmail.com"
const apiKey = "ATATT3xFfGF0VhO9QPs7Q7JOHq-8DJcJWmbpWRs09CzJ1EDr_0VKHjqTGsr0aXRGKhujcWATajkRLM34Zkyd2u9q9kU0QUXnPUgafGxxwO8nhtRCMHa7yhVBmsNA_uSHYX4wIBEbxGIG704KBDFvLQRwxqqnYbmdwJ6tfQ4dJrJFqT4RBjOsTXw=425BB83A"
const projectId="JUN"


export async function createJiraIssue(summary:string, description:string){

const issueRequestJson = {
    "fields":{
        "project":{
            "key":projectId
        },
         "summary":summary,
    "description":description,
    "issuetype":{
        "name":"Bug"
    }
    }

}

await axios.post(endpoint,issueRequestJson,
    {
        auth:{
            username:username,
            password :apiKey 
        },
        headers:{
            'Content-Type':`application/json`
        }
    }

)

}

//Send the POST request

