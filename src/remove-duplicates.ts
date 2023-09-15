import data from './assets/data/mocks/mock_application.json';
import { KnackApplication } from './models/knack.model';
import { writeFile } from './utils/file.utils';
import { isValidJson, isValidKnackApp } from './utils/common.utils';

console.time('Knack Node Code Challenge -> Remove duplicates');
sanitizeFile(data as KnackApplication, './src/clean_application.json');
// sanitizeFile2(data, './src/clean_application2.json');
console.timeEnd('Knack Node Code Challenge -> Remove duplicates');


export function sanitizeFile(knackAppData: KnackApplication, filePath: string) {

    if (isValidJson(JSON.stringify(knackAppData)) && isValidKnackApp(knackAppData)) {
        knackAppData.versions.forEach(version => {
            // Remove duplicates from array of objects.
            version.objects = removeDuplicates(version.objects);

            // Remove duplicates from array of fields.
            version.objects.forEach(obj => {
                obj.fields = removeDuplicates(obj.fields);
            });

            // Remove duplicates from array of views.
            version.scenes.forEach(scene => {
                scene.views = removeDuplicates(scene.views);
            });
        })

        writeFile(filePath, JSON.stringify(knackAppData, null, 4));
    } else {
        console.error('The data does not correspond to a valid Knack App.');
    }

}

function sanitizeFile2(data: any, filePath: string) {
    const jsonCleaned = sanitizeData(data);
    writeFile(filePath, JSON.stringify(jsonCleaned, null, 4));
}

export function removeDuplicates(fieldArray: any[]) {
    if (Array.isArray(fieldArray)) {
        const idMap = new Map();
        return [...new Set(fieldArray.map(item => {
            let {_id, ...rest } = item;
            const stringifyValue = JSON.stringify(rest);
            if (!idMap.has(stringifyValue)) {
                idMap.set(stringifyValue, _id);
            }
            return stringifyValue}))]
        .map(str => { return {_id: idMap.get(str), ...JSON.parse(str)}});
    } else {
        console.error('Field is not an array');
        return [];
    }
}


function sanitizeData(data: any): any {
    if (Array.isArray(data)) {
        const uniqueData = [];
        const seen = new Set();
        for (const item of data) {
            let {_id, ...rest } = item;
            const itemStr = JSON.stringify(rest);
            if (!seen.has(itemStr)) {
                uniqueData.push(item);
                seen.add(itemStr);
            }
        }
        return uniqueData.map(sanitizeData);
    } else if (typeof data === 'object' && data !== null) {
        // If it is an object, we remove duplicates in keys and values.
        const cleanedData: any = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const cleanedKey = sanitizeData(key);
                const cleanedValue = sanitizeData(data[key]);
                cleanedData[cleanedKey] = cleanedValue;
            }
        }
        return cleanedData;
    } else {
        // If it is neither an array nor an object, we return the value as is.
        return data;
    }
}
