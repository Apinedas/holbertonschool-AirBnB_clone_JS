#!/usr/bin/env node
import { BaseModel } from "./models/base_model.js";
import { User } from "./models/user.js";
import { State } from "./models/state.js";
import { City } from "./models/city.js";
import { Amenity } from "./models/amenity.js";
import { Place } from "./models/place.js";
import { Review } from "./models/review.js";
import { storage } from "./models/index.js"

let reloadedObjects = storage.all();
let reloadedUsers = storage.all(User);
console.log("-- Reloaded objects --")
console.log(reloadedObjects);
console.log("-- Reloaded users --")
console.log(reloadedUsers);
const my_user = new User();
my_user.first_name = "Alejo";
my_user.last_name = "Pineda";
my_user.email = "airbnb@mm.net";
my_user.password = "rootos";
storage.new(my_user);
reloadedUsers = storage.all(User);
console.log("-- Reloaded users with new --")
console.log(reloadedUsers);
storage.delete(my_user);
console.log("-- Reloaded users after del --")
console.log(reloadedUsers);
/*
const my_model = new BaseModel();
my_model.name = "My_First_Model";
my_model.my_number = 89;
my_model.update();
storage.new(my_model);
const my_user =  new User();
my_user.first_name = "Betty";
my_user.last_name = "Bar";
my_user.email = "airbnb@mail.com";
my_user.password = "root";
storage.new(my_user);
const my_state = new State();
storage.new(my_state);
const my_city = new City();
storage.new(my_city);
const my_amenity = new Amenity();
storage.new(my_amenity);
const my_place = new Place();
storage.new(my_place);
const my_review = new Review();
storage.new(my_review);
console.log("-- Total objects --");
console.log(storage.all());
storage.save();
*/