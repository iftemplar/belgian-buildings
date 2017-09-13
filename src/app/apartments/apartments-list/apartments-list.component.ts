import { Component, OnInit } from '@angular/core';

import { Apartment } from '../../shared/apartment.model';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.css']
})
export class ApartmentsListComponent implements OnInit {

	apartments: Apartment[] = [
		new Apartment('Two level flat', 1),
		new Apartment('4 room flat', 2),
		new Apartment('Studio flat', 4)
	];

  constructor() { }

  ngOnInit() {
  }

}
