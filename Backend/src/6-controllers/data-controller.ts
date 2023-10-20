import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import { TripModel } from "../3-models/trip-model";
import StatusCode from "../3-models/status-code";

const router = express.Router();

router.get("/areas", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const areas = await dataService.getAllAreas();
        response.json(areas);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/trips/:areaId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const areaId = request.params.areaId;
        const areas = await dataService.getAllTripsByAreaId(areaId);
        response.json(areas);
    }
    catch(err: any) {
        next(err);
    }
});

router.post("/trips", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const tripToAdd = new TripModel(request.body);
        const addedTrip = await dataService.addTrip(tripToAdd);
        response.status(StatusCode.Created).json(addedTrip);
    }
    catch(err: any) {
        next(err);
    }
});

router.delete("/trips/:tripId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const tripId = request.params.tripId;
        await dataService.deleteTrip(tripId);
        response.sendStatus(StatusCode.NoContent);
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
