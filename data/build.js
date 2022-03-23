const fs = require('fs');

function generateRE( type )
{
    let patterns = fs.readFileSync( __dirname + '/' + type + '.txt', 'utf8' ).split(/\s*\n\s*/).filter( i => i.trim() && i[0] !== '#' ).map( i => i.trim().replace(/\//g,'\\/') );

    return '(' + patterns.join('|') + ')';
}

console.log( '=== Exclusions ==========\n\n' );
console.log( generateRE( 'exclusions' ));

console.log( '\n' );

console.log( '=== Crawlers ==========\n\n' );
console.log( generateRE( 'crawlers' ));