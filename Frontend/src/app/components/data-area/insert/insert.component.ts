import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import TripModel from 'src/app/models/trip-model';
import AreaModel from 'src/app/models/area-mpdel';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-insert',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './insert.component.html',
    styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
    public allAreas: AreaModel[];
    public trip = new TripModel();

    public constructor(private dataService: DataService, private router: Router) { }

    public async ngOnInit() {
        try {
            this.allAreas = await this.dataService.getAllAreas();
        }
        catch (err: any) { alert(err.message) }
    }

    public async send() {
        try {
            await this.dataService.addTrip(this.trip);
            alert("trip has been");
            this.router.navigateByUrl("/list");
        }
        catch (err: any) { alert(err.message) }

    }

}
