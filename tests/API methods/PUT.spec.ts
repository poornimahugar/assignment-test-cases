const { test, expect } = require('@playwright/test');
var userid;

test("PL_AS10-PUT validation", async ({ request }) => {
    // Ensure 'userid' is set to a valid user ID.
    userid = 1; // Replace with the appropriate user ID.

    const response = await request.put('https://reqres.in/api/users/' + userid, {
        data: {"name": "poornima", "job": "trainer"},
        headers: {"Accept": "application/json"}
    });

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);

    // Validate the response data
    expect(responseBody.job).toBe("trainer");
    console.log("Validation done");
});
  
 test("PL_AS11 -PUT body validation", async ({ request }) => {
  const updateData = {
    job: "leader", // Replace with the actual ID
    updatedJob: 'trainer',
  };

  // Make a PUT request to the API endpoint using Playwright's request function
  const response = await request.put('https://reqres.in/api/users/2', {
    data: JSON.stringify(updateData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseBody = await response.json();
  const updatedJob = responseBody.updatedJob;
  expect(typeof updatedJob).toBe('string'); // You can replace 'string' with the expected data type

});

  

  test("PL_AS12 -PUT datatype validation", async ({ request }) => {
    // Ensure 'userid' is set to a valid user ID.
    userid = 1; // Replace with the appropriate user ID.

    const response = await request.get('https://reqres.in/api/users/' + userid, {
        data: {"name": "poornima", "job": "trainer"},
        headers: {"Accept": "application/json"}
    });

    const responseText = await response.text();

    if (typeof responseText === 'string') {
        console.log('The response content is a string.');
    } else {
        console.error('The response content is not a string.');
    }
});
