import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Nebular Modules
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonGroupModule,
  NbButtonGroupComponent,
  NbIconModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// Perfect Scrollbar
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// Components
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TutorialComponent } from './landing-page/pages/tutorial/tutorial.component';
import { PropertiesComponent } from './landing-page/pages/tutorial/properties/properties.component';
import { EventemitterComponent } from './landing-page/pages/tutorial/eventemitter/eventemitter.component';
import { ConstructorInjectionComponent } from './landing-page/pages/tutorial/constructor-injection/constructor-injection.component';
import { StringConfigInjectionComponent } from './landing-page/pages/tutorial/string-config-injection/string-config-injection.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    TutorialComponent,
    PropertiesComponent,
    EventemitterComponent,
    ConstructorInjectionComponent,
    StringConfigInjectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    // Nebular Modules
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: 'StringComponentConfig', useValue: 'myConfig' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
