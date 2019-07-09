import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorebankingCompComponent } from './corebanking-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CorebankingCompComponent],
  entryComponents: [CorebankingCompComponent]
})
export class LazyModModule {
  static entry = CorebankingCompComponent;
}
