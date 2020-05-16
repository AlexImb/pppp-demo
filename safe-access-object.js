class SafeAccessObject {
    constructor(object) {
        this.elements = new Object();
        for (let key in object) {
            if (object.hasOwnProperty(key) &&
                typeof object[key] === "object") {
                this.elements[key] = new SafeAccessObject(object[key]);
            } else if (object.hasOwnProperty(key)) {
                this.elements[key] = object[key];
            }
        }
    }

    getByPath(path) {
        let key = path.split('.')[0]
        if (this.elements[key] === undefined) {
            return undefined;
        } else if (path.split('.').length === 1) {
            return this.elements[key];
        } else {
            let subpath = path.substring(path.indexOf('.') + 1, path.length);
            return this.elements[key].getByPath(subpath);
        }
    }
}

module.exports = SafeAccessObject;