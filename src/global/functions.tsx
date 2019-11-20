import { h } from "@stencil/core";

interface FunctionsConfig {
  name?: string;
  text?: string;
  action?: Function;
};


export class CalculatorFunction {
  config: FunctionsConfig = {};
  code: HTMLButtonElement;
  constructor(config: FunctionsConfig) {
    this.config = config;
    if (!config.action) {
      this.config.action = () => {
        console.log('Not yet implemented...');
      }
    }
    if (!config.text) {
      this.config.text = '???';
    }
    this.code = <button id={config.name}
      class="mdc-button mdc-button--outlined mdc-ripple-surface">
      {config.text}
    </button>;
  }
  run() {
    console.log('this')
    this.config.action();
  }
}
