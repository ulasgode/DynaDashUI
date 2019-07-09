import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HealthComponent],
  entryComponents: [HealthComponent]
})
export class LazyModModule {
  static entry = HealthComponent;
}
