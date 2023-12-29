// @ts-check
const { test, expect } = require('@playwright/test');

const file = require('../json/squirtle-schema.json');

const ejs = require('easy-json-schema');

test('Pokemon Information', async ({ request }) => {
    const pokemon = await request.get('pokemon/mew');
    let pokejson = await pokemon.json()
    let pokeForms = pokejson.forms 
    console.log("🚀 - file: poke-api.spec.js:12 ~ test ~ pokeForms", pokeForms);
    const formSchema = ejs(pokeForms);
    expect(file).toEqual(formSchema)
    
}); 