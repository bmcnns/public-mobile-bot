var request = require('request');

let pageNumber = 1
let scrapeRootPath = "https://productioncommunity.publicmobile.ca/t5/Getting-Started/bd-p/getting_started/page/";
let scrapeFullPath = scrapeRootPath + pageNumber;

function recursivePageGrab(url) {
    request(scrapeFullPath, (err, response, body) => {
        if (err) { 
            console.error(err);
            return 
        }

        else if(response.statusCode == 200) {
            console.log(body);
            recursivePageGrab(response.statusCode, url);
            return;
        }
    });
}


recursivePageGrab(scrapeFullPath);
