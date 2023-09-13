import fs from 'fs';

export const writeFile = (path: string, jsonData: any) => {
    fs.writeFile(path, jsonData, {
        encoding: "utf8"
    }, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        }
    });
}