/**
 * Created by socce on 1/3/2016.
 */

module.exports = function(app) {
    app.get('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('c:/Users/socce/Documents/Github/HerbalTeaMaster/public/index.html');
});
}