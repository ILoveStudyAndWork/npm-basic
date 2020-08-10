import {transfer} from "../src/romanizer";

describe('transfer', () => {
    it('should return x when input 10', () => {
        const formatted = transfer(10);
        expect(formatted).toEqual("X");
    });
});
