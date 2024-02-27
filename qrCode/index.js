import inquirer from "inquirer";
// use inquirer to get user 

import qr, { image } from "qr-image";
import fs from "fs";

inquirer 
    .prompt([
        {
            message: "Enter you URL: ",
            // name is what to call the answer from user once given
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL
        let qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("File Saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // code
        } else {
            // more code
        }
    });