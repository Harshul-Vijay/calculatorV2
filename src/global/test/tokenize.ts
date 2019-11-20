export class Tokenizer {
    private tokens: Array<string|number> = [];
    constructor(expression: string)  {
        expression = expression.replace(/[ ]/ig, '');
        this.tokens = expression.split('');
    }

    structure() {
        const object: object = {};
        /* const operators: Array<string> = [
            '+',
            '-',
            '/',
            '*',
        ]; */
        // const tokensMapped: Array<string|number> = [];
        this.tokens.map((token, index) => {
            let type = '';
            const tStr = token.toString();
            if (tStr.match(/[0-9]/gi)) {
                type = 'Number';
            } else if (tStr === '+' || tStr === '-' || tStr === '/'
                || tStr === '*') {
                type = 'Operator';
            } else if (tStr.match(/[a-zA-Z]/gi)) {
                type = 'Literal';
            } else if (tStr.match(/[()]/gi)) {
                type = 'Parentheses';
            } else if (tStr.match(/[,]/gi)) {
                type = 'ArgSeparator';
            }
            object[index] = {
                type: type,
                value: token
            };
        });
        // let prev;
        let final = [];
        /* Object.entries(object).map((keyval) => {
          /* console.log(keyval[0], keyval[1]) *
          if (prev) {
            if (keyval[1].type === prev[1].type) {
              final
                .push(prev[1].value.toString() + keyval[1].value.toString());
            }
            console.log(keyval[1].type, prev.type);
          }
          prev = keyval;
        }); */
        console.log(final);
        // const mapped: Array<object> = [];
        /* this.tokens.map((token, index) => {
          console.log(index, token)
        }); */
        return object;
    }
}
