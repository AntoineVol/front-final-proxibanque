import { Survey } from "./survey";
import { Client } from "./client";

export class Response {
    id:number;
    comment : string;
    positiveResponse : boolean;
    newClient : boolean;
    survey : Survey;
    client : Client;

    constructor(){

    }
}