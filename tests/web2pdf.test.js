const web2pdf = require('../lib/web2pdf');

test('has makePDF method check', () => {
    expect(typeof web2pdf.makePDF).toBe('function');  
})

