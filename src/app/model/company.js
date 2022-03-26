class CompanyClass {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    getCompanyId() {
        return this.id;
    }

    getCompanyName() {
        return this.name;
    }

    getCompanyImage() {
        return this.image;
    }
}

class CompanyDetailClass extends PokemonClass {
    constructor(id, name, image, jobTitle, category) {
        super(id, name, image);
        this.jobTitle = jobTitle;
        this.category = category;
    }

    getJobTitle() {
        return this.jobTitle;
    }

    getCategory() {
        return this.category;
    }
}

export { CompanyClass, CompanyDetailClass };
