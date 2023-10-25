const { test, expect } = require('@playwright/test');
const { clear } = require('console');

var userid;

test("get user", async ({ request}) => {
  const response=await request.get('https://reqres.in/api/users?page=2')
  console.log(await response.json())
  expect(response.status()).toBe(200)
})

/*test("post user", async ({ request}) => {
    const response=await request.post('https://reqres.in/api/users',
    { data:{"name": "poornima","job": "leader"},
        headers:{ "Accept":"application/json" }
    })
    console.log(await response.json())
    expect(response.status()).toBe(201)
    var res=await response.json()
    userid=res.id
  })

  test("put user", async ({ request}) => {
    const response=await request.put('https://reqres.in/api/users/'+userid,
    { data:{"name": "poornima","job": "trainer"},
        headers:{"Accept":"application/json"}
    })
    console.log(await response.json())
    expect(response.status()).toBe(200)
  })

  
  test("delete user", async ({ request}) => {
    const response=await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)
  })*/


const Ajv = require('ajv');
const fs = require('fs');

const schemaPath = 'tests\schemas'; // Replace with your schema file path
//const schema = JSON.parse(fs.readFileSync(schemaPath));
const ajv = new Ajv();

test('API Response Schema Validation', async ({ page }) => {
  const response = await page.goto('https://reqres.in/api/users?page=2');
  const responseBody = await response.json();

  const validate = ajv.compile(schema);
  const isValid = validate(responseBody);

  expect(isValid).toBe(true);
});

