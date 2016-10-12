import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


// todo: change to ng2-bootstrap
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import { IntegrationEntity } from '../shared/integration-entity';
import { IntegrationService } from '../shared/integration.service';
import { IntegrationsNewForm } from '../cloud-integrations-new-form/cloud-integrations-new-form.component';
import { SpinnerComponent }  from '../spinner/spinner.component';
//import { InfiniteScroll } from 'angular2-infinite-scroll';

////  
//let template = require('./modal-demo.html');


 @Component({
  selector: 'cloud-integrations-scroll',
  //directives: [ InfiniteScroll ],
  templateUrl: './cloud-integrations-scroll.component.html',
  styleUrls:  ['./cloud-integrations-scroll.component.css'],
  providers: [IntegrationService],
  
})

export class CloudIntegrationsScrollComponent implements OnInit{
  @ViewChild('childModal') public childModal:ModalDirective;
  
  title = 'Cloud Integrations';
  integrationCollection: IntegrationEntity[] = [];
  intArry: number[] = [1,2,3];
  //integrationCollection1: IntegrationEntity[] = [];
  //integrationCollection2: IntegrationEntity[] = [];
  //integrationCollectionMaster: IntegrationEntity[];
  integration: IntegrationEntity;

  public isRequesting: boolean;
  

  constructor (
    private router: Router,
    private integrationService: IntegrationService) {}

  getIntegrations(): void {

   
   // this.integrationService.getIntegrations().then(x => this.integrationCollection = x.sort((
    //  a,b) => {if (a.id < b.id) return 1; else return -1;}));

      
     // this.integrationService.getIntegrations().then(integrationCollection => this.integrationCollection = integrationCollection);
      //alert('intArry count: ' + this.intArry.length);
      //alert('integrationCollection count: ' + this.integrationCollection.length);

      this.integrationService.getIntegrations().then(integrationCollection => this.integrationCollection = this.integrationCollection.concat(integrationCollection));

     


      //this.integrationService.getIntegrations().then(x => this.integrationCollection1 = x);
      //alert('1 count: ' + this.integrationCollection1.length);
      // this.integrationService.getIntegrations().then(x => this.integrationCollection2 = x);

  // this.integrationCollection = this.integrationCollection1.concat(this.integrationCollection2);
  //  this.integrationCollection = this.integrationCollectionMaster.slice(0,this.integrationCollectionMaster.length);

  }

   ngOnInit(): void {
    this.getIntegrations();

  
    
  }
 
  public showChildModal():void {
    this.childModal.show();
   //alert('yo');
  }
 
  public hideChildModal():void {
    this.childModal.hide();
    //this.getIntegrations();
  }

  integrationCreated(integ: IntegrationEntity)
  {
    
    this.integrationCollection.unshift(integ);
    this.isRequesting = true;
    this.hideChildModal();
    this.delay(3000).then(() => {integ.status = "Running"; });
    this.delay(30000).then(() => {integ.log_message = "Successfully imported record"; integ.status = "Success"; this.stopRefreshing(); });

  }

  private stopRefreshing() {
        this.isRequesting = false;
    }



  onScroll () {
        console.log('scrolled!!')
        this.getIntegrations();
    }

    delay(ms: number){
   return new Promise(resolve => setTimeout(resolve, ms));
}

 setStatusStyles(integ: IntegrationEntity)
  {

    let color: String;
    if (integ.status === 'Error')
    {
    color = "red";
    }
    else if (integ.status === 'Success')
    {
    color = "green";
    }
    else if (integ.status === 'Warning')
    {
    color = "orange";
    } 
    else if (integ.status === 'Running')
    {
    color = "blue";
    } 
    else
    {
    color = "black";
    }


     let styles = {
      'color': color
     };

     return styles;
  }

  setSpinnerHiddenStatus(integ: IntegrationEntity)
  {

    let hidden: String;
    if (integ.status === 'Running')
    {
      return {'display': 'inline-block'}
    }
    else 
    {
      return {'display': 'none'}
    }
   
  }



    

}

  

  



