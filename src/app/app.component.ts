import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { FactoryService } from './services/factory.service';
import { FactoryMenuItem } from './factory-menu-item';
import { LazyloadService } from './services/lazyload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'DynaDash';
  items: FactoryMenuItem[];

  @ViewChild('container', { read: ViewContainerRef, static: false }) container: ViewContainerRef;
  name = 'Angular';
  screenCode: string;
  constructor(
    private factoryService: FactoryService,
    private loader: LazyloadService) { }

  ngOnInit(): void {
    if (!this.items) {
      // this.items = FactoryMenuItem[];
    }

    this.items = this.factoryService.getDynamicModule();
    this.load();
  }

  load() {
    if (this.container) {
      this.container.clear();
      if (this.screenCode === "Traffic") {
        this.loader.load('traffic', this.container);
      } else if (this.screenCode === "Health") {
        this.loader.load('health', this.container);
      }else{
        this.loader.load('corebanking-comp', this.container);
      }
    }
  }

  onMenuSidebarClick(_screenCode) {
    this.screenCode = _screenCode;
    this.load();
  }
}
