import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompunentComponent } from './about-compunent/about-compunent.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutCompunentComponent },
  {path: 'transaction', component: TransactionComponent },
  {path: 'admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AboutCompunentComponent,
    TransactionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
