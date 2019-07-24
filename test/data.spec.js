global.window = global;
global.assert = require('chai').assert;
require('../src/dataList/directorsData/directors.json');
require('../src/data');
require('./data.spec.js/index.js.js');

const sample= [{"name": "Patty Jenkins", "movieSample": "Wonder Woman"}, {"name": "Sofia Coppola","movieSample": ["La Seducción", "Lost in Translation"]}, {"name": "Jennifer Kent", "movieSample": "Babadook"}, { "name": "Amma Asante", "movieSample": "Belle"}];
     
describe ('fetchingData', ()=> {
  it ('debería ser un objeto', ()=> {
    assert.equal(typeof windows.fetchingData, 'object');
  });
});




