import { Component, Input } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  template: `
    <div>
      <h4>{{data.intro}}</h4>
      <strong>Swift Works Again!</strong>
    </div>
  `
})

export class SwiftComponent implements MenuComponent {
  @Input() data: any;
}
