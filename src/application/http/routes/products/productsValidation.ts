const router = require("@koa/router")();

router.post("/products", function* () {
    yield this.validateBody({
        reference: "required",
        name: "required",
        price: "required",
    });

    if (this.validationErrors) {
        this.status = 422;
        this.body = this.validationErrors;
    } else {
        this.status = 200;
        this.body = { success: true };
    }
});

router.put("/products/:id", function* () {
    yield this.validateBody({
        reference: "required",
        name: "required",
        price: "required",
    });

    if (this.validationErrors) {
        this.status = 422;
        this.body = this.validationErrors;
    } else {
        this.status = 200;
        this.body = { success: true };
    }
});

export { router };
