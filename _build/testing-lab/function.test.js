let myFunction = require('./function.js')

test('returnTwo test', () => {
    expect(myFunction.returnTwo()).toBe(2)
  });

describe('Greeting test', () => {
test('James test', () => {
    expect(myFunction.greeting('James')).toBe('Hello James.')
});
test('Jill test', () => {
    expect(myFunction.greeting('Jill')).toBe('Hello Jill.')
});
});

describe('Add test', () => {
    test('1+2', () => {
        expect(myFunction.add(1,2)).toBe(3)
    });
    test('5+9', () => {
        expect(myFunction.add(5,9)).toBe(14)
});
});


