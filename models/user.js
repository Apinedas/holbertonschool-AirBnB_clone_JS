import { BaseModel } from "./base_model.js";

export class User extends BaseModel {
    email = "";
    password = "";
    first_name = "";
    last_name = "";
}
