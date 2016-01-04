/**
 * Created by socce on 1/3/2016.
 */
module.exports = function(app) {

    var multer = require('multer'); // middleware for file upload

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, 'c:/Users/socce/Documents/Github/HerbalTeaMaster/public/uploads')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({ //multer settings
        storage: storage
    }).single('file');

    app.post('/upload', function (req, res) {
        upload(req, res, function (err) {
            if (err) {
                res.json({error_code: 1, err_desc: err});
                return;
            }
            res.json({error_code: 0, err_desc: null});
        })
    })
}