import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../customer-details.service';
import { Customer_Details } from '../ModelEntity/Customer_Details';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  details ?: Customer_Details[];
  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(x=>this.details=x)
     console.log("hello");
  }
 

  constructor(private service: CustomerDetailsService){
    console.log("hi");
  }
  
}
