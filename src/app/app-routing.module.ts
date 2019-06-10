import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {
    path: "", component: LoginPageComponent,
  },
  {
    path: "home", component: HomePageComponent, children: [
      {
        path: "", component: ClientsHomeComponent
      },
      {
        path: "add-ticket", component: CreateTicketComponent
      },
      {
        path: "contacts", component: ContactsInfoComponent
      },
      {
        path: "contact-form", component: ContactFormComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
