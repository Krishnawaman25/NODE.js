const path=require('path');
const os=require('os');
// console.log(path.basename('C:/Users/Dell/node.js/demo2.js'));
// console.log(path.dirname('C:/Users/Dell/node.js/demo2.js'));
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.isAbsolute(__filename));


//os
console.log("===============os=================");
console.log(os.arch());
console.log(os.type());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
