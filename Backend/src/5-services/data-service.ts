import { AreaModel, IAreaModel } from "../3-models/area-model";
import { ResourceNotFoundError } from "../3-models/error-models";
import { ITripModel, TripModel } from "../3-models/trip-model";

function getAllAreas(): Promise<IAreaModel[]> {
    return AreaModel.find().exec();
}

function getAllTripsByAreaId(areaId: string): Promise<ITripModel[]>{
    return TripModel.find({areaId}).populate("areas").exec();
}

function addTrip(trip: ITripModel): Promise<ITripModel>{
    trip.validateSync();
    return trip.save();
}

async function deleteTrip(tripId: string){
    const deleteTrip  = await TripModel.findByIdAndDelete(tripId);
    if(!deleteTrip) throw new ResourceNotFoundError(tripId);
}


export default {
    getAllAreas,
    getAllTripsByAreaId,
    addTrip,
    deleteTrip
};

