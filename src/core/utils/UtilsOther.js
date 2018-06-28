import { MYVARIABLE } from '../const/Default'

export const reducerHello = (accumulator, currentValue) => {
    console.log(MYVARIABLE);
    let curr = (currentValue.constructor === Object) ? currentValue.firstName : currentValue;
    let acc = (accumulator.constructor === Object) ? accumulator.firstName : accumulator;
    return acc + ' ' + curr
};