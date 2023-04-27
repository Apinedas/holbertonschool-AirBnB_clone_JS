import { BaseModel } from "./base_model.js";

export class Place extends BaseModel {
    city_id = "";
    user_id = "";
    name = "";
    description = "";
    number_rooms = "";
    number_bathrooms = "";
    max_guest = "";
    price_by_night = "";
    latitude = "";
    longitude = "";
    amenity_ids = [];
}
