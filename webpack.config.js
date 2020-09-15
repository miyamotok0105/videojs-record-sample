const path = require('path');
const util = require('util');
const fs = require('fs-extra');
const colors = require('colors/safe');
const formidable = require('formidable');

// webpack-dev-serverでnpm startでも動く。
// flaskでも動くようにした。

// module.exports = {
//     entry: `./server-side.js`,
//     devServer: {
//         // webpack-dev-server middleware
//         before(app) {

//             // =============================================
//             // file upload handler for simple upload example
//             // =============================================
//             // make sure 'uploads' directory exists (and
//             // create it otherwise)
//             const targetDir = 'uploads';
//             fs.ensureDirSync(targetDir);

//             // file upload handler for examples
//             app.post('/upload', (req, res) => {
//                 // save uploaded file
//                 let form = new formidable.IncomingForm();
//                 form.uploadDir = targetDir;
//                 form.keepExtensions = true;

//                 console.log('saving uploaded file...');

//                 form.on('error', (err) => {
//                     console.log(colors.red('upload error:'));
//                     console.log(err);
//                 });

//                 form.on('fileBegin', (name, file) => {
//                     // use original filename in this example
//                     file.path = form.uploadDir + '/' + file.name;
//                     console.log(colors.yellow('filename:', file.name));
//                 });

//                 form.on('end', () => {
//                     console.log(colors.green('saved file.'));
//                     console.log('');
//                 });

//                 form.parse(req, (err, fields, files) => {
//                     res.writeHead(200, {'content-type': 'text/plain'});
//                     res.write('received upload:\n\n');
//                     res.end(util.inspect({fields: fields, files: files}));
//                 });

//                 return;
//             });
//             console.log('');
//             console.log(colors.green(' [examples] /upload handler ready'));
//             console.log('');
//         }
//     }
// }
