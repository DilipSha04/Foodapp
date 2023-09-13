import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", ()=>{
    const result = sum(6, 7);

    //Assertion
    expect(result).toBe(13)
})