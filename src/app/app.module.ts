import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/about/about.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GettingstartedComponent } from './components/gettingstarted/gettingstarted.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ColorsComponent } from './components/colors/colors.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { FormsComponent } from './components/forms/forms.component';
import { DesignComponent } from './components/designs/design/design.component';
import { SpinnersComponent } from './components/designs/spinners/spinners.component';
import { ButtonsComponent } from './components/designs/buttons/buttons.component';
import { CardsComponent } from './components/designs/cards/cards.component';
import { AlertsComponent } from './components/designs/alerts/alerts.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ContentComponent,
    AboutComponent,
    GettingstartedComponent,
    LayoutComponent,
    ColorsComponent,
    UtilitiesComponent,
    FormsComponent,
    DesignComponent,
    SpinnersComponent,
    ButtonsComponent,
    CardsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatButtonModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
