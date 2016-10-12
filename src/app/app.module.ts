import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';


import { AppComponent } from './app.component';
import { IntegrationsNewForm } from './cloud-integrations-new-form/cloud-integrations-new-form.component';
import { CloudIntegrationsScrollComponent } from './cloud-integrations-scroll/cloud-integrations-scroll.component';
import { CloudIntegrationsComponent } from './cloud-integrations/cloud-integrations.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InMemoryDataService }  from './shared/in-memory-data-service';
import { IHubPocCliRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [ AppComponent, 
  CloudIntegrationsComponent, 
  CloudIntegrationsScrollComponent, 
  IntegrationsNewForm, 
  SpinnerComponent],
  imports: [
    BrowserModule,
    Ng2BootstrapModule,
    InfiniteScrollModule,
    FormsModule,
    IHubPocCliRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
