import { Component, h } from '@stencil/core';
import '../../global/workers/init';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <main>
          <app-home></app-home>
        </main>
      </div>
    );
  }
}
