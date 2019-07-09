import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ad-host]',
})
export class FactoryMenuDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}