import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'  
import {Component, OnInit, Output, EventEmitter } from '@angular/core'

import { IntegrationEntity } from '../shared/integration-entity';
import { IntegrationService } from '../shared/integration.service';


@Component({
  selector: 'integrations-new-form',
  templateUrl: './cloud-integrations-new-form.component.html'
})
export class IntegrationsNewForm implements OnInit{ 
    @Output() integrationCreated = new EventEmitter();

    constructor ( private integrationService: IntegrationService ) {}

 public myForm: FormGroup; // our model driven form
 public submitted: boolean; // keep track on whether form is submitted


    ngOnInit() {
        // we will initialize our form model here


    this.myForm = new FormGroup({
       platform: new FormControl('ERP',[<any>Validators.required]),
       server: new FormControl('xx',[<any>Validators.required]),
        integrationType: new FormControl('FBDI',[<any>Validators.required]),
         integrationName: new FormControl('Import Journals',[<any>Validators.required]),
         fileName: new FormControl('suppliersMFH.zip',[<any>Validators.required]),
         status: new FormControl('New',[<any>Validators.required])
       //platform: new FormControl('FBDI',[<any>Validators.required, <any>Validators.minLength(5)])

    });

    }

    save(model: IntegrationEntity, isValid: boolean) {
        this.submitted = true; // set form submit to true
        //alert('Saved');

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
        //alert(model.platform);

        if (isValid)
        {

           // this.integrationCreated.emit(model)
       //this.integrationCreated.emit(model);    
        //this.integrationService.create(model);
        //this.integrationCreated.emit(model); 
        
        this.integrationService.create(model).then(x => { this.integrationCreated.emit(x) });

            // call API to insert... 
           //alert('Platform: ' + model.platform);

           /*
            this.integrationService.create(model)
    .then(integ => {
      alert('Created new integration: ' + model.platform);


        }

        */

        }

    }

        
    



    

}
   
    