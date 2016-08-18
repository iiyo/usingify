/* global module */

function usingify (package) {
    
    var content = "/* global using, require */\n", key;
    
    for (key in package.dependencies) {
        content += "\n" + toUsing(key) + "\n";
    }
    
    return content;
}

function toUsing (packageName) {
    return 'using().define("' + packageName + '", function () { ' +
            'return require("' + packageName + '"); ' +
        '});';
}

module.exports = {
    usingify: usingify,
    toUsing: toUsing
};
