import fs from "fs";
import { BaseModel } from "../base_model.js";
import { User } from "../user.js";
import { State } from "../state.js";
import { City } from "../city.js";
import { Amenity } from "../amenity.js";
import { Place } from "../place.js";
import { Review } from "../review.js";

export class FileStorage {
    #file_path = "file.json";
    #objects = {}

    all(cls) {
        if (!cls) {
            return this.#objects;
        }
        const retObj = {}
        for (const [key, value] of Object.entries(this.#objects)) {
            if (value instanceof cls) {
                retObj[key] = value;
            }
        }
        return retObj;
    }

    new(obj) {
        obj.update();
        this.#objects[`${obj.constructor.name}.${obj.id}`] = obj;
    }

    save() {
        let objToSave = {}
        for (const [key, value] of Object.entries(this.#objects)) {
            objToSave[key] = value.to_obj();
        }
        fs.writeFileSync(this.#file_path, JSON.stringify(objToSave));
    }

    reload() {
        const existingClasses = {
            BaseModel,
            User,
            State,
            City,
            Amenity,
            Place,
            Review
        }

        try {
            const data = fs.readFileSync(this.#file_path, { encoding: 'utf-8' });
            const loadedObjects = JSON.parse(data);
            for (const [key, value] of Object.entries(loadedObjects)) {
                const newObj = new existingClasses[value["__cls__"]](value);
                this.#objects[key] = newObj;
            }
        } catch {}
    }

    delete(obj) {
        if (obj && Object.keys(this.#objects).includes(`${obj.constructor.name}.${obj.id}`)) {
            delete this.#objects[`${obj.constructor.name}.${obj.id}`];
        }
    }
}
