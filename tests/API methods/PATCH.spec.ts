const { test, expect } = require('@playwright/test');
var userid;

test("PL_AS13-PATCH validation", async ({ request }) => {
    // Ensure 'userid' is set to a valid user ID.
    userid = 1; // Replace with the appropriate user ID.

    const response = await request.patch('https://reqres.in/api/users/' + userid, {
        data: {"name": "poornima hugar", "job": "trainer"},
        headers: {"Accept": "application/json"}
    });

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);

    // Validate the response data
    expect(responseBody.name).toBe("poornima hugar");
    console.log("PATCH validation done");
});

  test("PL_AS14 -PATCH body validation", async ({ request }) => {
    const response = await request.patch('https://reqres.in/api/users/' + userid, {
      data: {
        "name": "poornima hugar",
        "job": "trainer"
      },
      headers: {
        "Accept": "application/json"
      }
    });
  
    console.log(await response.json());
    expect(response.status()).toBe(200);
  
    var res = await response.json();
    let { name, job } = res;
  
    // Validate the updated data against your expectations.
    await expect(name).toBe("poornima hugar");
    await expect(job).toBe("trainer");
    
    console.log("PATCH body validation done");
  });
  
 
  test("PL_AS15-PATCH datatype validation", async ({ request}) => {
    userid = 1; // Replace with the appropriate user ID.
  
    const response = await request.put('https://reqres.in/api/users/' + userid, {
        data: {"name": "poornima hugar", "job": "trainer"},
        headers: {"Accept": "application/json"}
    });
  
    const responseText = await response.text();
  
    if (typeof responseText === 'string') {
        console.log('The response content is a string.');
    } else {
        console.error('The response content is not a string.');
    }
  });


test("PL_AS16-Validation of Data created", async ({ request }) => {
  // Ensure 'userid' is set to a valid user ID.
  userid = 1; // Replace with the appropriate user ID.

  const response = await request.patch('https://reqres.in/api/users/' + userid, {
    data: {
      "name": "poornima hugar",
      "job": "trainer"
    },
    headers: {
      "Accept": "application/json"
    }
  });

  const responseBody = await response.json();
  console.log(responseBody);

  // Validate the response status code.
  expect(response.status()).toBe(200);

  // Validate the updated data against your expectations.
  expect(responseBody.name).toBe("poornima hugar");
  expect(responseBody.job).toBe("trainer");
  // Add more validation checks as needed.
});

  
 