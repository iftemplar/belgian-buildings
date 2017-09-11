import { Component, OnInit } from '@angular/core';

import { Building } from '../building.model';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings: Building[] = [
    new Building('Dzherelna',
    'The concept of residential development Belgian Village is based on the construction of 9 standard blocks of 40 or 32 apartments per each 312 apartments in total situated almost in the heart of the Lviv city.',
    'http://bm.lviv.ua/img/owl5.jpg'),
    new Building('Pustomyty',
    'We started in 2013 as a company who wanted to build housing in Belgian standard for the people of Lviv. Our main feature is a full range of “turnkey” construction activities. We are doing everything in-house starting from engineering and all the architecture, marketing and sales.',
    'http://belgianvillage.com/wp-content/uploads/11-1-1.jpg'),
    new Building('Horodok',
    'Our Group of Companies guarantees a full range of architectural, engineering and design services. We also have our own construction and investment company. More than 150 specialists work under the guidance of international management.',
    'http://belleville.com.ua/img/typeF.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
