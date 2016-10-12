import { Component, ViewContainerRef } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 

    title = 'iHub';
    // for ng2-bootstrap modal
    private viewContainerRef: ViewContainerRef;
    

    // You need this small hack in order to catch application root view container ref (for ng2-bootstrap modal)
    public constructor(viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

}
