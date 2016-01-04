/**
 * Created by socce on 1/3/2016.
 */
module.exports = function(app) {

    var multer = require('multer'); // middleware for file upload

    var storageIngredient = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, 'c:/Users/socce/Documents/Github/HerbalTeaMaster/public/img/ingredient')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.originalname)
        }
    });

    var storageRecipe = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, 'c:/Users/socce/Documents/Github/HerbalTeaMaster/public/img/recipe')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var uploadIngredient = multer({ //multer settings
        storage: storageIngredient
    }).single('file');

    var uploadRecipe = multer({ //multer settings
        storage: storageRecipe
    }).single('file');

    app.post('/uploadIngredient', function (req, res) {
        uploadIngredient(req, res, function (err) {
            if (err) {
                res.json({error_code: 1, err_desc: err});
                return;
            }
            res.json({error_code: 0, err_desc: null});
        })
    })

    app.post('/uploadRecipe', function (req, res) {
        uploadRecipe(req, res, function (err) {
            if (err) {
                res.json({error_code: 1, err_desc: err});
                return;
            }
            res.json({error_code: 0, err_desc: null});
        })
    })
}