import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficComponent } from './traffic.component';

// import { CorebankingCompComponent } from './corebanking-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrafficComponent],
  entryComponents: [TrafficComponent]
})
export class LazyModModule {
  static entry = TrafficComponent;
}
