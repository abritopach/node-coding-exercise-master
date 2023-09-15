import { KnackApplication } from "../models/knack.model";

export const isValidKnackApp = (appData: any): appData is KnackApplication => {
    return appData.versions && appData.versions.length > 0;
}

export const isValidJson = (str: string) => {
    try{
        JSON.parse(str);
    } catch (e){
        //Error
        return false;
    }
    return true;
}
