import { APIRequestContext } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any
let id: any

export async function generateToken(request: APIRequestContext) {

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9Z4Hg6QSRpSI9OAxvlxMSVxot8s9LeLWfS84pG1xnesOmZyu3YKktPxg6DA4",
                "client_secret": "07247BEEC69783A00F25AA4002ADF4120271E8D2E3E589BA559FD4340B9B8A60",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "Ravi@testleaf#123",
                "grant_type": "password"
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody);

    token = responseBody.access_token;
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
}

export async function createResource(request: APIRequestContext) {

    await generateToken(request) // token,inst_url,tokenType getting ready when     await generateToken(request) // token,inst_url,tokenType getting ready when genrate


    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "FirstName": "Ravi",
                "LastName": "78787878",
                "Salutation": "Mr.",
                "Company": "Qeagle",
                "Phone": "78787878"
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody);

    console.log(response.status());

    console.log(response.statusText());

    id = responseBody.id

}

export async function fetchResource(request: APIRequestContext) {

    const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody);

    console.log(response.status());
    console.log(response.statusText());

    return responseBody.LastName //PlaywrightTrainer060126

}