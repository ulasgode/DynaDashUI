import { Type } from '@angular/core';

export class FactoryMenuItem {
    constructor(public component: Type<any>, public data: any) {
    }
}