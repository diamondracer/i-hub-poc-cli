import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IntegrationEntity } from './integration-entity';

@Injectable()
export class IntegrationService {

      private integrationsUrl = 'app/ents';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }


    getIntegrations(): Promise<IntegrationEntity[]> {
         return this.http.get(this.integrationsUrl)
               .toPromise()
               .then(response => response.json().data as IntegrationEntity[])
               .catch(this.handleError);

    

    }

    create(Integration: IntegrationEntity): Promise<IntegrationEntity> {
  return this.http
    .post(this.integrationsUrl, JSON.stringify({platform: Integration.platform, 
      server: Integration.server, 
      integrationType: Integration.integrationType, 
      integrationName: Integration.integrationName,
    fileName: Integration.fileName,
  status: Integration.status }), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}

 
 



    private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}