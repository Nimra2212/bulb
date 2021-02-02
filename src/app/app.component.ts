import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bulb-on';

  bgOpecity=0
  
  ngOnInit() {
    
  this.bgOpecity=0
}
  button(){
    if(this.bgOpecity==0){
     this.bgOpecity=1
    }
    else{
      this.bgOpecity=0
    }
  }
}
