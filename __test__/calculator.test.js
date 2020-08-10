import {plus, sum} from "../src/calculator";

describe('calculator', () => {
    it('should return 3 when 1 plus 2', () => {
        const formatted = plus(1, 2);
        expect(formatted).toEqual(3);
    });

    it('should return 6 when sum of 1, 2, 3', () => {
        const result = sum([1, 2, 3]);

        expect(result).toEqual(6);
    });

    it('should return 3 when 1 plus 2', () => {
        function  Person() {
            this.age = 10;
            setTimeout(
                () => {
                    this.age++;
                    console.log(this.age);
                }, 1000
            )
        }
        let p = new Person();
    });
});
