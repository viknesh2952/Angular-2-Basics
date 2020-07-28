import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { VikiComponent } from './viki/viki.component';
import { MatListModule} from '@angular/material/list';
import {FormsModule}from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import {RecordsService} from './records.service';
import {UserService} from './user.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaleorfemalePipe } from './maleorfemale.pipe';
import { ExdirectiveDirective } from './exdirective.directive';
const routes: Routes = [
  {
    path:'',redirectTo: 'first', pathMatch: 'full'
  },
  {
    path:'first',component:VikiComponent
  },
  {
    path:'second',component:SecondComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminComponent,
    canActivate : [AuthGuard]

  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  
];


@NgModule({
  declarations: [
    AppComponent,
    VikiComponent,
    SecondComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    DashboardComponent,
    MaleorfemalePipe,
    ExdirectiveDirective,

  ],
  imports: [
    BrowserModule,MatToolbarModule,MatIconModule,FormsModule,HttpClientModule,
AppRoutingModule,MatSidenavModule,MatListModule,MatButtonModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes)
  ],
  providers: [RecordsService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
