import { isValidJson } from "./common.utils";

describe('Common Utils Tests', () => {

    beforeEach(() => {
        // Reset mocks
        jest.resetAllMocks();
    });


    it('should return true when the input is a valid JSON string', () => {
        const input = '{"name": "John", "age": 30}';
        const result = isValidJson(input);
        expect(result).toBe(true);
    });

    it('should return true when the input is an empty JSON object', () => {
        const input = '{}';
        const result = isValidJson(input);
        expect(result).toBe(true);
    });

    it('should return true when the input is an empty JSON array', () => {
        const input = '[]';
        const result = isValidJson(input);
        expect(result).toBe(true);
    });

    it('should return true when the input is a JSON object with multiple key-value pairs', () => {
        const input = '{"name": "John", "age": 30, "city": "New York"}';
        const result = isValidJson(input);
        expect(result).toBe(true);
    });

    it('should return false when the input is an invalid JSON string', () => {
        const input = '{"name": "John", "age": 30}';
        const result = isValidJson(input + 'invalid');
        expect(result).toBe(false);
    });

});