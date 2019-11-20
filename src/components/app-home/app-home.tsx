import { Component, Element, h, Build } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { CalculatorFunction } from '../../global/functions';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {
  @Element() rootEl: HTMLElement;
  numbers = [
    new CalculatorFunction({
      text: `7`
    }), new CalculatorFunction({
      text: `8`
    }), new CalculatorFunction({
      text: `9`
    }), new CalculatorFunction({
      text: `4`
    }), new CalculatorFunction({
      text: `5`
    }), new CalculatorFunction({
      text: `6`
    }), new CalculatorFunction({
      text: `1`
    }), new CalculatorFunction({
      text: `2`
    }), new CalculatorFunction({
      text: `3`
    }), new CalculatorFunction({
      text: `(`
    }), new CalculatorFunction({
      text: `0`
    }), new CalculatorFunction({
      text: `)`
    }), new CalculatorFunction({
      text: `\u00B1`
    }), new CalculatorFunction({
      text: `=`
    }), new CalculatorFunction({
      text: '.'
    }),
  ];
  functions = [
    new CalculatorFunction({
      text: `\u002B`
    }), new CalculatorFunction({
      text: `\u2212`
    }), new CalculatorFunction({
      text: `\xD7`
    }), new CalculatorFunction({
      text: `\xF7`
    }), new CalculatorFunction({
      text: `\u221A`
    }), new CalculatorFunction({
      text: `x\xB2`
    }), new CalculatorFunction({
      text: `x^y`
    }), new CalculatorFunction({
      text: `log(x)`
    }), new CalculatorFunction({
      text: `ln(x)`
    }), new CalculatorFunction({
      text: `sin(x)`
    }), new CalculatorFunction({
      text: `cos(x)`
    }), new CalculatorFunction({
      text: `tan(x)`
    }), new CalculatorFunction({
      text: `10^x`
    }), new CalculatorFunction({
      text: `Mod`
    }), new CalculatorFunction({
      text: `\u03C0`
    }), new CalculatorFunction({
      text: `n!`
    }), new CalculatorFunction({
      text: `Exp`
    })
  ];
  componentDidLoad() {
    /* const fn = new CalculatorFunction({
      text: 'index',
      name: 'idx'
    });
    console.log(fn.code);
    fn.run(); */
    if (Build.isBrowser) {
      // console.log(this.rootEl.shadowRoot.querySelector('.mdc-drawer--modal'))
      this.rootEl.shadowRoot.querySelectorAll('.mdc-button')
        .forEach(el => new MDCRipple(el));
    }
  }

  render() {

    return (
      <div class='app-home'>
        <div class="mdc-card expression">
          <div class="mdc-card--content">
            expression
          </div>
        </div>
        <div class="mdc-card">
          <div class="mdc-card--content operations">
            <div class="numpad">
              {this.numbers.map((number: CalculatorFunction) => {
                number.code.onclick = () => {
                  number.run();
                }
                return number.code;
              })}
            </div>
            <div class="functions">
              <div class="mdc-card--actions">
                Inverse functions {/* switch will be implemented here. */}
                Dark theme {/* switch will be implemented here. */}
              </div>
              {this.functions.map((fn: CalculatorFunction) => {
                fn.code.onclick = () => {
                  fn.run();
                }
                return fn.code;
              })}
            </div>
          </div>
        </div>
      </div>);
  }
}
