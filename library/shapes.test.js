const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () =>{
    test('should render a triangle SBG with the chosen color', ()=>{
        const triangle = new Triangle('blue');
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
        expect (triangle.render()).toEqual(expected);
    });
});

describe('Circle', () =>{
    test('should render a circle SBG with the chosen color', ()=>{
        const circle = new Circle ('red');
        const expected = `<circle cx="150" cy="133" r="80" fill="red"/>`;
        expect (circle.render()).toEqual(expected);
    });
});

describe('Square', () =>{
    test('should render a triangle SBG with the chosen color', ()=>{
        const square = new Square ('green');
        const expected = `<rect x="50" y="83" width="200" height="100" fill="green"/>`;
        expect (square.render()).toEqual(expected);
    });
});