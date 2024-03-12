import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GettingstartedComponent } from './components/gettingstarted/gettingstarted.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ColorsComponent } from './components/colors/colors.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { FormsComponent } from './components/forms/forms.component';
import { ContentComponent } from './components/content/content.component';
import { DesignComponent } from './components/designs/design/design.component';
import { SpinnersComponent } from './components/designs/spinners/spinners.component';
import { ButtonsComponent } from './components/designs/buttons/buttons.component';
import { CardsComponent } from './components/designs/cards/cards.component';
import { AlertsComponent } from './components/designs/alerts/alerts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'side', component: SidebarComponent },
  { path: 'start', component: GettingstartedComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'color', component: ColorsComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'content', component: ContentComponent },
  { path: 'test', component: DesignComponent },


  { path: 'spinner', component: SpinnersComponent },
  { path: 'button', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'alert', component: AlertsComponent },








  { path: '', redirectTo: '/start', pathMatch: 'full' }, // Redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
