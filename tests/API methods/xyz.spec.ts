const { test, expect } = require('@playwright/test');

test ("data type", async ({ request}) => {
  const response=await request.get('https://reqres.in/api/users')

  var body=await response.json()
  console.log(await response.json())
  expect(response.status()).toBe(200)
  var data1=body.data
  console.log("data",data1)
  console.log( typeof(data1))

 // var jboday=JSON.parse(data1)

  console.log(Array.isArray(data1)); // Should print true
  const isValidResponse = (  
     typeof data1.id === 'number' && 
    typeof data1.email === 'string' &&  
     typeof data1.first_name === 'string' &&  
      typeof data1.last_name === 'string' &&  
       typeof data1.avatar === 'string'); 
       console.log('Is Valid Response:', isValidResponse);
  

})

  

