import {test, expect} from 'vitest'
import { add } from './math'

test('should create a summary of the numbers added together', ()=>{
   const numbers = [1, 2, 3];

   const result = add(numbers);

   const expectedResult = numbers.reduce((prevValue, currentValue)=> prevValue + currentValue, 0);
   
   expect(result).toBe(expectedResult);
})