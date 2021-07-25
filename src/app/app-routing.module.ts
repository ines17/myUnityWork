import { CalendarComponent } from './Template/calendar/calendar.component';
import { UpdateEventComponent } from './Template/Events/update-event/update-event.component';
import { FormEventComponent } from './Template/Events/form-event/form-event.component';

import { NotfoundComponent } from './Template/notfound/notfound.component';
import { RegisterComponent } from './Template/register/register.component';
import { LoginComponent } from './Template/login/login.component';
import { PublicationsComponent } from './Template/publications/publications.component';
import { EventComponent } from './Template/Events/event/event.component';
import { AboutComponent } from './Template/home/about/about.component';
import { HomeComponent } from './Template/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './Template/Events/event-details/event-details.component';
import { RandomGuard } from './Services/random.guard';
import { AuthGuard } from './Services/auth.guard';

import {AssociationComponent} from './Template/association/association.component';
import {ShowAssociationComponent} from './Template/association/show-association/show-association.component';

import { ReclamationComponent } from './Template/reclamation/reclamation.component';
import {AddOrUpdateAssociationComponent} from './Template/association/add-or-update-association/add-or-update-association.component';
import { ContactComponent } from './Template/contact/contact.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "feedback", component: ReclamationComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "events", component: EventComponent},
  {path: "contact", component: ContactComponent},
  {path: "publications", component: PublicationsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "event_details/:id", component: EventDetailsComponent},
  {path: "form-event", component: FormEventComponent},
  {path: "update-event/:id", component: UpdateEventComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: "home", component: HomeComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "about", component: AboutComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "events", component: EventComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "publications", component: PublicationsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "login", component: LoginComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "event_details", component: EventDetailsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},

  // Associations
  {path: "associations", component: AssociationComponent},
  {path: "associations/show/:id", component: ShowAssociationComponent},
  {path: "associations/add-or-update", component: AddOrUpdateAssociationComponent},
  {path: "**", component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
