import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardService } from './services/dashboard.service';
import { CorporateComponent } from './screens/credits/corporate/corporate.component';
import { IndividualComponent } from './screens/credits/individual/individual.component';
import { CommercialComponent } from './screens/credits/commercial/commercial.component';
import { HealthComponent } from './screens/insurance/health/health.component';
import { TrafficComponent } from './screens/insurance/traffic/traffic.component';
import { EftComponent } from './screens/transfers/eft/eft.component';
import { SwiftComponent } from './screens/transfers/swift/swift.component';
import { DashMenu } from './models/dash-menu.model';
import { FactoryContainerComponent } from './components/factory-container/factory-container.component';
import { FactoryService } from './services/factory.service';
import { FactoryMenuDirective } from './factory-menu-directive';
import { LAZY_WIDGETS } from './tokens';
import { lazyArrayToObj, lazyWidgets } from './lazy-widgets';
import { LazyloadService } from './services/lazyload.service';
import { CorebankingCompComponent } from './components/corebanking-comp/corebanking-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CorporateComponent,
    IndividualComponent,
    CommercialComponent,
    // HealthComponent,
    // TrafficComponent,
    EftComponent,
    SwiftComponent,
    FactoryContainerComponent,
    FactoryMenuDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DashboardService, DashMenu, FactoryService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }, LazyloadService, provideRoutes(lazyWidgets)],
  bootstrap: [AppComponent],
  entryComponents: [EftComponent, SwiftComponent]
})

export class AppModule {
  constructor() {}
 }
