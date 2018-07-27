import { Survey } from "./survey";

export class Response {
    id:number;
    comment : string;
    positiveResponse : boolean;
    newClient : boolean;
    survey : Survey;
}