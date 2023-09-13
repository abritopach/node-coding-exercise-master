import { removeDuplicates } from "./remove-duplicates";

describe('Remove Duplicate Tests', () => {

    beforeEach(() => {
        // Reset mocks
        jest.resetAllMocks();
    });

    it('should return an empty array when an empty array is passed as input', () => {
        const input: string[] = [];
        const result = removeDuplicates(input);
        expect(result).toEqual([]);
    });

    it('should return an array with unique properties when an array of objects with unique properties is passed as input', () => {
        const input = [
            { _id: '1', name: 'John' },
            { _id: '2', name: 'Jane' },
            { _id: '3', name: 'Bob' }
        ];
        const result = removeDuplicates(input);
        expect(result).toEqual(input);
    });

    it('should return an array with unique properties when an array of objects with duplicate properties is passed as input', () => {
        const input = [
            { _id: '1', name: 'John' },
            { _id: '2', name: 'Jane' },
            { _id: '1', name: 'John' }
        ];
        const result = removeDuplicates(input);
        expect(result).toEqual([
            { _id: '1', name: 'John' },
            { _id: '2', name: 'Jane' }
        ]);
    });

    it('should return an array with unique properties when an array of objects with null or undefined properties is passed as input', () => {
        const input = [
            { _id: '1', name: null },
            { _id: '2', name: undefined },
            { _id: '3', name: 'Bob' }
        ];
        const result = removeDuplicates(input);
        expect(result).toEqual(input);
    });

    it('should return an array with unique properties when an array of objects with missing properties is passed as input', () => {
            const input = [
            { _id: '1', name: 'John' },
            { _id: '2' },
            { _id: '3', name: 'Bob' }
            ];
            const result = removeDuplicates(input);
            expect(result).toEqual(input);
    });

    it('should return an array with unique properties when an array of objects with properties of different types is passed as input', () => {
        const input = [
            { _id: '1', name: 'John', age: 25 },
            { _id: '2', name: 'Jane', age: '30' },
            { _id: '3', name: 'Bob', age: true }
        ];
        const result = removeDuplicates(input);
        expect(result).toEqual(input);
    });

});