/**
 * Procedural Way of Creating a Pen
 */
var pen1InkLevel = 50;
var pen2InkLevel = 100;
var pen1InkColor = 'red';
var pen2InkColor = 'blue';

function doWrite( message, inkColor, inkLevel ) {
    console.log( `Color = ${inkColor} - ${message}`);
    return inkLevel - message.length;
}

pen1InkLevel = doWrite( 'Hello World', pen1InkColor, pen1InkLevel );
console.log( `Pen1 Ink level = ${pen1InkLevel}`);

pen2InkLevel = doWrite( 'Able was I ere I saw elba', pen2InkColor, pen2InkLevel );
console.log( `Pen1 Ink level = ${pen2InkLevel}`);

pen1InkLevel = doWrite( 'Hello World', pen1InkColor, pen1InkLevel );
console.log( `Pen1 Ink level = ${pen1InkLevel}`);

pen2InkLevel = doWrite( 'Able was I ere I saw elba', pen2InkColor, pen2InkLevel );
console.log( `Pen1 Ink level = ${pen2InkLevel}`);