import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs';
import AreaModel from '../models/area-mpdel';
import TripModel from '../models/trip-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAllAreas(): Promise<AreaModel[]> {
        const observable =  this.http.get<AreaModel[]>(environment.areasUrl);
        const areas = await firstValueFrom(observable);
        return areas;
    }

    public async getAllTripsByAreaId(areaId: string): Promise<TripModel[]> {
        const observable =  this.http.get<TripModel[]>(environment.tripsUrl + areaId);
        const trips = await firstValueFrom(observable);
        return trips;
    }

    public async addTrip(trip: TripModel): Promise<TripModel> {
        const observable =  this.http.post<TripModel>(environment.tripsUrl, trip);
        const addedTrip = await firstValueFrom(observable);
        return addedTrip;
    }

    public async deleteTrip(tripId: string): Promise<void> {
        const observable =  this.http.delete<AreaModel[]>(environment.tripsUrl + tripId);

    }

}
