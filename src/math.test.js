import {test, expect} from 'vitest'
import { add } from './math'

test('should create a summary of the numbers added together', ()=>{
   const numbers = [1, 2, 3];

   const result = add(numbers);

   const expectedResult = numbers.reduce((prevValue, currentValue)=> prevValue + currentValue, 0);
   
   expect(result).toBe(expectedResult);
})

test('should yield NaN if at least one invalid number is provided', ()=>{

   const InvalidNumber = ['Invalid number', 1]

    const Invalid = add(InvalidNumber);

    expect(Invalid).toBeNaN();

})

test('should yield the correct sum of numbers', ()=>{

   const InvalidNumber = ['1', '2', '3', '4']
   
   const result = add(InvalidNumber);

   const expectedResult = InvalidNumber.reduce((prevValue, currentValue)=> +prevValue + +currentValue, 0);
   
   expect(result).toBe(expectedResult);
})