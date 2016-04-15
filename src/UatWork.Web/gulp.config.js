module.exports = function ()
{
    var nodeModules = "./node_modules/";
    var clientRoot = "./wwwroot/";
    var sourceRoot = "./Content/";

    var config = {
        fabricComponentJsfile: [
            nodeModules + "office-ui-fabric/dist/js/jquery.fabric.js"
        ],
        clientRootPath: clientRoot,
        clientJsPath: clientRoot + "scripts/",
        clientCssPath: clientRoot + "css/",
        sourceCssPath: sourceRoot + "Styles/",
        sourceSCSSPath: sourceRoot + "Styles/*.scss",
        sourceHtmlPath: sourceRoot + "Scripts/**/*.html",
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'Templates',
                standalone: true
            }
        }

    };

    return config;
}
