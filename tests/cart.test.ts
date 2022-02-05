import { container } from "../src/container";
import { Cart } from "../src/core/domain/cart/cart";
import { AddProductInACart } from "../src/core/useCases/cart/AddProductInACart";
import { Product } from "../src/core/domain/product/product";

test("should add a product in a cart with a quantity of 1", async () => {
    const cart: Cart = await container.resolve(AddProductInACart).invoke('1', getFakeProduct(), 1);
    expect(cart.countItems).toBe(1);
});

test("should add a product in a cart with a quantity of 2", async () => {
    const cart: Cart = await container.resolve(AddProductInACart).invoke('1', getFakeProduct(), 2);
    expect(cart.countItems).toBe(2);
});

function getFakeProduct(): Product {
    return {
        id: "idFake",
        name: "nameFake",
        reference: "refFake",
        price: 678,
        updated_at: new Date(),
        created_at: new Date(),
    } as Product;
}
