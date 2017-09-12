import { Component } from '@angular/core';

import { Apartment } from '../shared/apartment.model';

@Component({
    selector: 'app-apartments',
    templateUrl: 'apartments-list.component.html'
})

export class Apartments{
    apartments: Apartment[] = [
        new Apartment('Two-level flat', 1),
        new Apartment('3-room flat', 2)
    ];
}