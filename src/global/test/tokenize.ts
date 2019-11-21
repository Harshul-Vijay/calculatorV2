interface Token {
  type: string;
  value: string;
}

export class Tokenizer {
  /* private tokens: Array<Token> = []; */
  private expression: string;
  constructor(expression: string)  {
    // Remove all whitespaces
    expression = expression.replace(/[ ]/ig, '');
    this.expression = expression;
    // this.tokens = expression.split('');
  }

  private nextChar(index: number) {
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
  }
}
