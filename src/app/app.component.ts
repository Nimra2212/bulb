import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bulb-on';

  bgImg=''
  bulb=false;
ngOnInit(){
  this.bgImg="url('./../../../assets/bulb.jpg')"
}
  button(){
    if(this.bulb==false){
     this.bulb=true;
    }
    else{
      this.bulb=false
    }
  }
}
