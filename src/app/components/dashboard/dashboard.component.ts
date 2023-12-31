import { Component } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor( private service: JwtService ){}
  message: string;

  ngOnInit(){
    this.hello();
  }

  hello(){
    this.service.hello().subscribe(
      (response) => {
       
        this.message = response.message;
      }
    )
  }
}