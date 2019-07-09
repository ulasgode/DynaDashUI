import { Injectable }           from '@angular/core';

import { FactoryMenuItem } from '../factory-menu-item';
import { EftComponent } from '../screens/transfers/eft/eft.component';
import { SwiftComponent } from '../screens/transfers/swift/swift.component';

@Injectable()
export class FactoryService {
  getDynamicModule() {
    return [
      new FactoryMenuItem(SwiftComponent, {intro: 'Swift Rocks! ' }),
      new FactoryMenuItem(SwiftComponent, {intro: 'Swift Works Again!' }),
      new FactoryMenuItem(EftComponent, {intro: 'Eft Rocks! ' }),
      new FactoryMenuItem(EftComponent, {intro: 'Eft Works Again!' })
    ];
  }
}
