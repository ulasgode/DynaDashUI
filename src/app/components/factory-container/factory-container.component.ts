import {
  Component, Input, OnInit, ViewChild,
  ComponentFactoryResolver, OnDestroy, ViewContainerRef
} from '@angular/core';

import { FactoryMenuItem } from 'src/app/factory-menu-item';
import { MenuComponent } from '../menu/menu.component';
import { FactoryMenuDirective } from 'src/app/factory-menu-directive';
import { LazyloadService } from 'src/app/services/lazyload.service';


@Component({
  selector: 'app-factory-container',
  template: `
              <div>
                <h3>Dynamic loading screen components changing in interval</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})

export class FactoryContainerComponent implements OnInit, OnDestroy {
  @Input() items: FactoryMenuItem[];
  currentAdIndex = -1;
  @ViewChild(FactoryMenuDirective, { static: true }) adHost: FactoryMenuDirective;
  interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
    private loader: LazyloadService
    ) { }

  ngOnInit() {
    this.loadDynamicComponent();
    this.getDynamicComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadDynamicComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.items.length;
    const item = this.items[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<MenuComponent>componentRef.instance).data = item.data;
  }

  getDynamicComponent() {
    this.interval = setInterval(() => {
      this.loadDynamicComponent();
    }, 3000);
  }
}