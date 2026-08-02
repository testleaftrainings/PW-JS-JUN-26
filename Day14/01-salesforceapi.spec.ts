

/* 5 points to do API testing:

1. Endpoint : Dev Doc.
2. CRUD : POST, GET,...
3. Authorization : OAuth , Username and Password
4. Header : Content-Type : application/json
5. Request Body

*/


import { expect, test } from "@playwright/test";

let url: any// declaring url globally so that url is accessible across all the tests
let token: any
let id: any

test.describe.serial("Create Lead Salesforce using API", async () => {


    /* GENERATE TOKEN */
    test("Generate Token", async ({ request }) => {

        //await page.goto("")

        const response = await request.post("https://login.salesforce.com/services/oauth2/token", // Serilaization

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


        const responseBody = await response.json(); // Deserialization JSON-> Object

        token = responseBody.access_token
        console.log(token);

        url = responseBody.instance_url
        console.log(url);

        console.log(response.status()) // 200
        console.log(response.statusText()); //OK

        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK")
        

    })

    /* Create LEAD */

      test("Create Lead", async ({ request }) => {

        const createLeadResponse = await request.post(`${url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "Salutation": "Mr.",
                    "FirstName": "Ravindran",
                    "LastName": "R-Jun26",
                    "Company": "Testleaf_ABC_PLAYWRIGHT_API" // Creating though PLAYWIRGHT API
                }

            }
        )

        const responseBody = await createLeadResponse.json();
        console.log(responseBody);

        id = responseBody.id

    })

    test("Fetch the lead Created", async ({ request }) => {

        const fetchResponse = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {

            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const responseBody = await fetchResponse.json();

        console.log(responseBody);
        

    })

})

/* Note :

page fixture => Page (Interface)=> UI testing  => goto(), locator()...

page=> isolated browser environment => context created for UI testing

request fixture => APIRequestContext (Interface) => API Testing CRUD : POST,GET

request => create an isolated API context*/