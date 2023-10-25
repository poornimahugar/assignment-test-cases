 const { test, expect } = require('@playwright/test')

var userid

 test("post user", async ({ request}) => {
   const response=await request.post('https://reqres.in/api/users',
   { data:{"name": "poornima","job": "leader"},
       headers:{ "Accept":"application/json" }
   })
   console.log(await response.json())
  expect(response.status()).toBe(201)
  var res=await response.json()
  //userid=res.id
 })

test("PL_AS06-POST response validation", async ({ request}) => {
   const response=await request.post('https://reqres.in/api/users',
   { data:{"name": "poornima","job": "leader"},
       headers:{ "Accept":"application/json" }
   })
   console.log(await response.json())
 console.log("Response code ",response.status())
  expect(response.status()).toBe(201)
  var res=await response.json()
  userid=res.id
  let name =res.name
 await expect(res.name).toBe("poornima")

 console.log("full moon  transaltion equal to  ",name)
})

test("PL_AS07-PUT body validation", async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      "name": "poornima",
      "job": "trainer"
    },
    headers: {
      "Accept": "application/json"
    }
  });
  console.log(await response.json());
  expect(response.status()).toBe(201);

  var res = await response.json();
  let job = res.job;
  await expect(job).toBe("trainer");

  let name = res.name;
  await expect(name).toBe("poornima");
  console.log("Body validation done");
});


test("PL_AS08-post response datatype validation", async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/' + userid, {
    headers: { "Accept": "application/json" }
  });

  console.log(await response.json());
  console.log("Response code ", response.status());
  expect(response.status()).toBe(200);

  var body = await response.json();
  console.log("data", body);

  var data1 = body.data;
  console.log("data", data1);
  console.log(typeof(data1));

  console.log(Array.isArray(data1));

  // Check if 'data1' is an object before validating the 'job' property.
  const isValidResponse = typeof data1 === 'object' && typeof data1.job === 'string';
  console.log('Is Valid Response:', isValidResponse);
});

test("PL_AS09-Validation of Data created", async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      "name": "poornima",
      "job": "leader"
    },
    headers: {
      "Accept": "application/json"
    }
  });

  const responseBody = await response.json();
  console.log(responseBody);

  // Validate the response status code.
  expect(response.status()).toBe(201);

  // Validate the created data against your expectations.
  expect(responseBody.name).toBe("poornima");
  expect(responseBody.job).toBe("leader");
  // Add more validation checks as needed.
});


