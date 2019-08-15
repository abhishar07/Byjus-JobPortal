import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JobService } from './job.service';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
