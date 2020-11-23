import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { BackendService } from './services/backend.service';
import { AuthGuard } from './services/auth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './shared/ng-material/ng-material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardHeaderComponent } from './shared/header/dash-header.component';
import { HelpdeskComponent } from './shared/helpdesk/helpdesk.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
import { EmployeeComponent } from './manage/employee.component';
import { SalaryComponent } from './manage/salary.component';
import { VoucherComponent } from './manage/voucher.component';
import { JobCodeComponent } from './setup/jobcode.component';
import { LeaveCodeComponent } from './setup/leavecode.component';
import { SalaryCodeComponent } from './setup/salarycode.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardHeaderComponent,
    HelpdeskComponent,
    LoginComponent,
    SignupComponent,
    EmployeeComponent,
    SalaryComponent,
    VoucherComponent,
    JobCodeComponent,
    LeaveCodeComponent,
    SalaryCodeComponent,
    AboutusComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [BackendService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
