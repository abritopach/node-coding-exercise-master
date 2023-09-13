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

export const isPrimitive = (val: any) => {
    if(val === null){
        return true;
    }
    if  (typeof val == "object" || typeof val == "function"){
        return false;
    }   else{
        return true;
    }
}
