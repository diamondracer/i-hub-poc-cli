import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CloudIntegrationsComponent} from './cloud-integrations/cloud-integrations.component'
import {CloudIntegrationsScrollComponent} from './cloud-integrations-scroll/cloud-integrations-scroll.component'

const routes: Routes = [
  {
      path:'',
      redirectTo: '/integrations',
      pathMatch: 'full'
  },
  {
    path: 'integrations',
    component: CloudIntegrationsComponent
  },
  {
    path: 'integrationsscroll',
    component: CloudIntegrationsScrollComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class IHubPocCliRoutingModule { }
