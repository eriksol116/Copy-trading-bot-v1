import jwt from 'jsonwebtoken';
import axios from 'axios';
import fs from 'fs';


export function convertHttpToWebSocket(httpUrl: string): string {
    return httpUrl.replace(/^https?:\/\//, 'wss://');
}

export const saveToJSONFile = (filePath: string, data: object): void => {
    // Convert data object to JSON string
    const jsonData = JSON.stringify(data, null, 2);  // The `null, 2` argument formats the JSON with indentation
    fs.writeFileSync(filePath, jsonData, 'utf8');
    console.log('Data saved to JSON file.');
};


export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



export function formatDate() {
    const options: any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        timeZoneName: 'short'
    };

    const now = new Date();
    return now.toLocaleString('en-US', options);
}
