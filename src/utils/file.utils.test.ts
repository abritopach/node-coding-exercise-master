import fs from 'fs';

import { writeFile } from "./file.utils";

// Auto-mock fs.
jest.mock('fs');

describe('File Utils Tests', () => {

    beforeEach(() => {
        // Reset mocks
        jest.resetAllMocks();
    });

    it('should successfully write a file with a valid path and data', () => {
        // Mock valid path and data
        const path = './src/tests/test-valid-path-data.json';
        const jsonData = { name: 'John Doe', age: 25 };

        // Call the function
        writeFile(path, JSON.stringify(jsonData));

        // Assert that the file is written successfully
        // Use a mock implementation of fs.writeFile to check if it is called with the correct arguments
        expect(fs.writeFile).toHaveBeenCalledWith(path, JSON.stringify(jsonData), { encoding: "utf8" }, expect.any(Function));
    });

    it('should handle empty data without error', () => {
        // Mock valid path and empty data
        const path = './src/tests/test-empty-data.json';
        const jsonData = {};

        // Call the function
        writeFile(path, JSON.stringify(jsonData));

        // Assert that the file is written successfully
        // Use a mock implementation of fs.writeFile to check if it is called with the correct arguments
        expect(fs.writeFile).toHaveBeenCalledWith(path, JSON.stringify(jsonData), { encoding: "utf8" }, expect.any(Function));
    });

    it('should handle large data sets without error', () => {
        const path = './src/tests/test-large-data.json';
        const jsonData = { data: 'a'.repeat(1000000) };

        writeFile(path, JSON.stringify(jsonData));

        expect(fs.writeFile).toHaveBeenCalledWith(path, JSON.stringify(jsonData), { encoding: "utf8" }, expect.any(Function));
    });

});