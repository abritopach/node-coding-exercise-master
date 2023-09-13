import data from './assets/data/mocks/mock_application.json';
import { KnackApplication } from './models/knack.model';
import { writeFile } from './utils/file.utils';
import { isPrimitive, isValidJson, isValidKnackApp } from './utils/common.utils';

console.time('Knack Node Code Challenge -> Remove duplicates');
sanitizeFile(data as KnackApplication, './src/clean_application.json');
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



function sanitizeFile2(data: any) {
    const result: any = {};
    const stack = [data];
    while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
            console.log(`key: ${key}, value: ${currentObj[key]}`);
            if (Array.isArray(currentObj[key]) && currentObj[key].length > 1) {
                result[key] = removeDuplicates(currentObj[key]);
            } else if (isPrimitive(currentObj[key])) {
                result[key] = currentObj[key];
            } else if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                stack.push(currentObj[key]);
            }
        });
    }
    writeFile('./src/clean_application2.json', JSON.stringify(result, null, 4));
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
