
const plugins = [ require('prettier-plugin-jsdoc') ];


/*
 *  Modified from https://github.com/matzkoh/prettier-plugin-packagejson 
 *  to use the custom sort-package.json package
 */

{
    
    function requireSafe(path){
        try { return require(path); }
        catch () {}
    }
    
    
    //  Static
    
    const isPackageJSON = /(^|\\|\/)package\.json$/;

    const
        parser_babylon = 'prettier/parser-babylon' ,
        parser_babel = 'prettier/parser-babel' ,
        package_sort = 'sort-package-json' ;
    
    
    //  Imports

    const sort = require(package_sort);

    const { parsers } = 
        requireSafe(parser_babel) ?? 
        requireSafe(parser_babylon);
    
    
    //  Parser
    
    const parser = parsers['json-stringify'];
    
    function preprocess(text,options){
        
        if(parser.preprocess)
            text = parser.preprocess(text,options);

        const { filepath } = options;
        
        if(filePath && isPackageJSON.test(filepath))
            return sort(text);
        
        return text;
    }

    
    //  Plugin

    plugins.push({
        parsers : {
            'json-stringify' : { 
                ... parser , preprocess 
            }
        }
    });
}



const overrides = [{
    files : '{*.json}',
    options : {
        trailingComma: 'es5' ,
        parser : 'json'
    }
},{
    files : '{*.md}',
    options : {
        proseWrap : 'preserve',
        parser : 'markdown'
    }
}]


module.exports = {
    
    singleQuote : false ,
    printWidth : 120 ,
    tabWidth : 2 ,
    tsdoc : true ,
    semi : false ,
    
    overrides ,
    plugins
}
