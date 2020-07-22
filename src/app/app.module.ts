import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';

import { HomeComponent } from './home/home.component';
import { PhdStudentsComponent } from './phd-students/phd-students.component';
import { MscStudentsComponent } from './msc-students/msc-students.component';

import { HomeNewComponent } from './home-new/home-new.component';
import { PhdGraduatesComponent } from './phd-graduates/phd-graduates.component';
import { MscGraduatesComponent } from './msc-graduates/msc-graduates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    PhdStudentsComponent,
    MscStudentsComponent,

    HomeNewComponent,
    PhdGraduatesComponent,
    MscGraduatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
