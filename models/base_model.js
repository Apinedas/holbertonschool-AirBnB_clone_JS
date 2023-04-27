import { v4 as uuidv4 } from 'uuid';

export class BaseModel {
    constructor(object) {
        if (object) {
            for (const [key, value] of Object.entries(object)) {
                if (!(['__cls__', 'created_at', 'updated_at'].includes(key))) {
                    this[key] = value;
                } else if (key !== '__cls__') {
                    this[key] = new Date(value);
                }
            }
        } else {
            this.id = uuidv4();
            this.created_at = new Date();
            this.updated_at = new Date();
        }
    }

    update() {
        this.updated_at = new Date();
    }
    
    to_obj() {
        let retObj = { ...this }
        retObj["__cls__"] = this.constructor.name;
        retObj["created_at"] = this.created_at.toISOString();
        retObj["updated_at"] = this.updated_at.toISOString();

        return retObj;
    }
}
