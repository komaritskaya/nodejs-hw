import csvtojson from 'csvtojson';
import fs from 'fs';
import { pipeline } from 'stream';

const inputFile = './csv/input.csv';
const outputFile = './outputFile.txt';

pipeline(
    fs.createReadStream(inputFile),
    csvtojson()
        .preFileLine((fileLine, index) => index === 0 ? fileLine.toLowerCase() : fileLine),
    fs.createWriteStream(outputFile),
    (error) => {
        if (error) { 
            console.log('Pipeline failed: ', error); 
        } else {
            console.log('Pipeline succeeded.');
        }
    } 
);
