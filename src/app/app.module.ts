import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatDialogModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { TicketStatusComponent } from './ticket-status/ticket-status.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TicketStatusComponent,
    HomePageComponent,
    ClientsHomeComponent,
    CreateTicketComponent,
    ContactsInfoComponent,
    ContactFormComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
