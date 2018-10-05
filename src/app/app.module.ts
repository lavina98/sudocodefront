import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule, FormArray, FormBuilder } from '@angular/forms';
import { RegistercollegeComponent } from './registercollege/registercollege.component';
import { NavComponent } from './nav/nav.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateEventsComponent } from './create-events/create-events.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { TeacherNavComponent } from './teacher-nav/teacher-nav.component';
import { ReferenceMaterialComponent } from './reference-material/reference-material.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RegistercollegeComponent,
    NavComponent,
    CreateEventsComponent,
    NotificationsComponent,
    UpdateAttendanceComponent,
    TeacherNavComponent,
    ReferenceMaterialComponent,
    RegisterTeacherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
