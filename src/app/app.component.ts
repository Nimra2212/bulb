import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bulb-on';


  bulb=false;

  button(){
    if(this.bulb==false){
     this.bulb=true;
    }
    else{
      this.bulb=false
    }
  }
}
