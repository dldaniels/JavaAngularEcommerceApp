import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonLlistComponent implements OnInit {

//create an array of objects
salesPersonList: SalesPerson[] = [
  new SalesPerson("Anup", "Kumar", "anup.kumar@company.com", 50000),
  new SalesPerson("John", "doer", "john.doe@company.com", 90210),
  new SalesPerson("Claire", "Murphy", "claire.murphy@company.com", 80212),
  new SalesPerson("Mai", "Truong", "mai.truong@company.com", 13929)
];

  constructor() { }

  ngOnInit(): void {
  }

}
