/**
 * Object Oriented Way of Creating a Pen
 */

 class Pen {
    constructor(inkLevel, inkColor) {
        this.inkLevel = inkLevel;
        this.inkColor = inkColor;
    }
    doWrite(message) {
        if ( this.inkLevel - message.length > 0 ) {
            console.log( `Color - ${this.inkColor} - ${message}`);
            this.inkLevel = this.inkLevel - message.length;
        } else {
            console.log( 'NO INK LEFT' );
        }
    }
    getInkLevel() {
        console.log(`Ink Level = ${this.inkLevel}`);
    }
 }

 var pen1 = new Pen(100, 'blue');
 var pen2 = new Pen(100, 'yellow');
 var pen3 = new Pen(50, 'red');

 pen1.doWrite('Hello World');
 pen1.getInkLevel();

 pen2.doWrite('fdsklfjdsljf l;sjfkl dsjfls');
 pen2.getInkLevel();

 pen3.doWrite('lkfjdslkfjdlskjfl ksj flksdjflk jslfj lksj flks');
 pen3.getInkLevel();

 pen3.doWrite('fijdhsf ldhsjk fhsdjkfhkds jhfjks hfkjdshfjk hsfjkhdsjk fhdsjkhfjk sdhs');
 pen3.getInkLevel();