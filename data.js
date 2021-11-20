var fs = require('fs');
const axios = require('axios');
let readlineSync = require("readline-sync");

axios.get("https://api.merakilearn.org/courses").then(resp => {
    Data = resp.data;
    let file = JSON.stringify(Data, null, 4)
    fs.writeFileSync("Meraki_course.json", file)
    serial_no = 1
    for (let i in Data['availableCourses']) {
        serial_no = serial_no + 1
    }

}).catch((error) => {

});