const { test, expect } = require('@playwright/test');
var userid;

test("get user", async ({ request}) => {
  const response=await request.get('https://reqres.in/api/users?page=2')
  console.log(await response.json())
  expect(response.status()).toBe(200)
})
const Joi = require('joi');

function validateObjectAgainstSchema(data, schema) {
  const { error, value } = schema.validate(data);
  return { error, value };
}
const schema = Joi.object({
  id: Joi.number().required(),
  email: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  avatar: Joi.string().required(),
});

test("Schema Validation Test", async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect('data' in body).toBe(true);

  const data1 = body.data;
  expect(Array.isArray(data1)).toBe(true);

  // Using the generic schema validation function
  const { error, value } = validateObjectAgainstSchema(data1, schema);
  
  if (error) {
    console.error('Data does not confirm to the schema:', error.details);
  } else {
    console.log('Data is valid:', value);
  }
});
