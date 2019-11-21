interface TokenInterface {
  type: string;
  value: string;
}

class Token implements TokenInterface {
  type: string;
  value: string;
  constructor(type: string, value: string) {
    this.type = type;
    this.value = value;
  }
}

export class Tokenizer {
  private letterBuffer: Array<any> = [];
  private numberBuffer: Array<any> = [];
  private tokens: Array<any> = [];
  private functions: Array<any> = [{
    name: 'sin'
  }];
  /* private tokens: Array<Token> = []; */
  // private expression: string;
  constructor(expression: string)  {
    // Remove all whitespaces
    expression = expression.replace(/\s+/ig, '');
    expression.split('').map((value) => {
      if (this.type(value) === 'Number') {
        this.numberBuffer.push(new Token('Number', value));
        this.joinLB();
      } else if (this.type(value) === 'Literal') {
        this.letterBuffer.push(new Token('Literal', value));
        this.joinNB();
      } else if (this.type(value) === 'LeftParenthesis') {
        if (this.functions.find((fn) => fn.name ===
          this.joinLB({ returnValue: true }).value)) {
          this.tokens.push(new Token('Operator', '*'));
          this.joinLB();
        } else {
          this.joinNB();
          this.tokens.push(new Token('Operator', '*'));
        }
        this.tokens.push(new Token(this.type(value), value));
      } else if (this.type(value) === 'RightParenthesis') {
        this.joinNB();
        this.joinLB({ pushAs: 'lit' });
        this.tokens.push(new Token(this.type(value), value));
      } else if (this.type(value) === 'Operator') {
        this.joinLB({ pushAs: 'lit' });
        this.joinNB();
        this.tokens.push(new Token(this.type(value), value));
      } else {
        this.joinLB();
        this.joinNB();
        this.tokens.push(new Token(this.type(value), value));
      }
    });
    this.joinNB();
    this.joinLB({ pushAs: 'lit' });
    //console.log(this.tokens);
    this.tokens.map((token, index) => {
      console.log(index + "=> " + token.type + "(" + token.value + ")");
    });
    // console.log(tokens);
    // this.expression = expression;
    /* const tokens: Array<Token|string> = [];
    let prev = undefined;
    let buffer = []; */
    /* expression.split('').map((value, index) => {
      // tokens.push(new Token('Type', value));
      if (prev !== undefined) {
        if (this.type(value) === this.type(prev.v)) {
          if (!buffer.find(prev => prev.i == index - 1)) {
            buffer.push(prev);
          }
          buffer.push({ v: value, i: index });
        } else {
          if (buffer.length) {
            let fn = buffer.reduce((previous, current) => {
              return { v: previous.v + current.v };
            });
            fn = fn.v;
            tokens.push(fn);
            
          } else {
            tokens.push(value);
          }
          buffer = [];
        }
      }
      prev = { v: value, i: index };
    });
    console.log(tokens.join(``)); */
    // this.tokens = expression.split('');
  }

  private joinLB(config: { pushAs?: string, returnValue?: boolean } = {
    pushAs: 'fn'
  }) {
    /* if (config.pushAs === undefined) {
      config.pushAs = 'fn';
    } */
    if (this.letterBuffer.length) {
      let lc = this.letterBuffer.reduce((prev, curr) => {
        return { value: prev.value + curr.value };
      });
      if (config.returnValue) {
        return lc;
      } else {
        let type = 'Literal';
        if (config.pushAs === 'fn') {
          type = 'Function';
          this.tokens.pop();
          this.tokens.push(new Token(type, lc.value));
          this.tokens.push(new Token('LeftParenthesis', '('));
        } else if (config.pushAs === 'lit') {
          this.letterBuffer.map((letter) => {
            this.tokens.push(new Token('Operator', '*'));
            this.tokens.push(new Token(type, letter.value));
          });
        }
      }
      this.letterBuffer = [];
    }
  }

  private joinNB(returnValue: boolean = false) {
    if (this.numberBuffer.length) {
      let nc = this.numberBuffer.reduce((prev, curr) => {
        return { value: prev.value + curr.value };
      });
      if (returnValue) {
        return nc;
      } else {
        this.tokens.push(new Token('Number', nc.value));
        this.numberBuffer = [];
      }
    }
  }

  private type(value: any) {
    if (value.match(/[A-z]/gi)) {
      return 'Literal';
    } else if (value.match(/[0-9.]/gi)) {
      return 'Number';
    } else if (value.match(/[+-/*=]/gi)) {
      return 'Operator';
    } else if (value.match(/[(]/gi)) {
      return 'LeftParenthesis';
    } else if (value.match(/[)]/gi)) {
      return 'RightParenthesis';
    }
  }

  /* private nextChar(index: number) {
    let char = `x00`, i = index;
    if (i < this.expression.length) {
      char = this.expression.charAt(i);
      index++;
    }
    return char;
  }

  private peek(index: number) {
    let i = index;
    if (i < this.expression.length) {
      return this.expression.charAt(i);
    } else {
      return `x00`;
    }
  }

  private isIdentifierStart(char) {
    return (char === '_') || char.match(/[a-zA-Z]/gi);
  }

  private isIdentifierPart(char) {
    return this.isIdentifierStart(char) || char.match(/[0-9]/gi);
  }

  scanOperators() {
    if (this.expression.match(/[+-/*()=]/gi)) {
      const token: Token = {
        type: 'Operator',
        value: this.nextChar(0)
      };
      return token;
    }
    return undefined;
  }

  scanIdentifiers() {
    let char, identifier;
    char = this.nextChar(0);
    if (!this.isIdentifierStart(char)) {
      return undefined;
    }
    identifier = this.nextChar(0);
    while (true) {
      char = this.peek(0);
      if (!this.isIdentifierPart(char)) {
        break;
      }
      identifier += this.nextChar(0);
    }
    const token: Token = {
      type: 'Identifier',
      value: identifier
    };
    return token;
  } */
}
