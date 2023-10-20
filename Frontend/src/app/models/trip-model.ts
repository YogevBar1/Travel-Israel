import AreaModel from "./area-mpdel";

class TripModel{
    public _id: string;
    public tripName: string;
    public tripDescription: string;
    public areaId: string;
    public priceAdult: number;
    public priceKid: number;
    public areas: AreaModel;    

}

export default TripModel;