/**
 * TutoApp
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ClientDTO } from './clientDTO';


export interface CommandeDTO { 
    error?: string | null;
    hasError?: boolean | null;
    id?: number;
    total?: number;
    discount?: number;
    date?: string;
    clientID?: number;
    client?: ClientDTO;
}

