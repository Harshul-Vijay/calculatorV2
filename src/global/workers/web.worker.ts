// import { MDCRipple } from '@material/ripple';
// import { evaluate } from 'mathjs/number';
import { Tokenizer } from '../test/tokenize';
onmessage = (e) => {
    // Workaround (for TypeScript compiler error with `postMessage()`)
    // (https://stackoverflow.com/questions/50402004)
    const context: Worker = <any>self;
    /* context.postMessage('event');
    console.log(e) */
    if (e) {
        // console.log(eval('4+9+9'));
        // console.log(evaluate('4+9+9'));
        // console.log(MDCRipple)
        const tkn = new Tokenizer('4sin(a+5) = 9');
        /*console.log(tkn.structure()); */
        console.log(tkn.scanOperators());
    }
    context.postMessage('text');
    //self.postMessage('event');
};
