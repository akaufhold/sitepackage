const { init } = require('./app.js');

init("output inits", ()=>{
    const output = init("test1","test2");
    expect(output).toBe("test1 test2"); 
}); 