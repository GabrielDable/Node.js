

const fs = require ("fs")

const CsvReadableStream = require("csv-reader");

const AutoDetectDecoderStream = require('autodetect-decoder-stream');

let csv = fs.createReadStream("/Users/user/Desktop/JS/Move/Advanced/Node.js/Modules/hubspot-crm-view-relatorio-de-negocios-personali-2022-12-15.csv")
            .pipe(new AutoDetectDecoderStream({ defaultEncoding: '1255' }))


let NewCsv = ""

csv
    .pipe(new CsvReadableStream({parseNumbers: true, parseBooleans: true, trim: true}))
    .on("data", (row) => {


        row[4] = row[4].split("(").splice(1,1).toString().replace(")",",");
        NewCsv +=`${row.toString()} \n`;

        
    })

    .on("end", () =>{ 

        csv.end();

        let Write = fs.WriteStream("./out.csv");

        Write.write(NewCsv)

        
       
    })