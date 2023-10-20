import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import AreaModel from 'src/app/models/area-mpdel';
import TripModel from 'src/app/models/trip-model';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public allAreas: AreaModel[];
    public tripsByAreaId: TripModel[];

    public constructor(private dataService: DataService) { }

    public async ngOnInit() {
        try {
            this.allAreas = await this.dataService.getAllAreas();
        }
        catch (err: any) { alert(err.message) }
    }

    public async getTripsByAreaId(args: Event) {
        try {
            const areaId = (args.target as HTMLSelectElement).value;
            this.tripsByAreaId = await this.dataService.getAllTripsByAreaId(areaId);
            console.log(this.tripsByAreaId);

        }
        catch (err: any) { alert(err.message) }
    }

    public async deleteTrip(tripId: string) {
        try {
            const isSure = window.confirm("Are you sure?");
            this.dataService.deleteTrip(tripId);
            alert("trip has been deleted");
            this.tripsByAreaId = this.tripsByAreaId.filter(trip => trip._id !== tripId);
        }
        catch (err: any) { alert(err.message) }
        }

    
}


