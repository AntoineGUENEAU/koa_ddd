import { container } from "../../src/container";
import { CartDto } from "../../src/core/domain/cart/Cart";
import { AddProductInACart } from "../../src/core/useCases/cart/AddProductInACart";
import { ProductDto } from "../../src/core/domain/product/Product";

test("should add a product in a cart with a quantity of 1", async () => {
    const cart: CartDto = await container.resolve(AddProductInACart).invoke("1", getFakeProduct(), 1);
    expect(cart.items.length).toBe(1);
});

test("should add a product in a cart with a quantity of 2", async () => {
    const cart: CartDto = await container.resolve(AddProductInACart).invoke("1", getFakeProduct(), 2);
    expect(cart.items.length).toBe(2);
});

function getFakeProduct(): ProductDto {
    return {
        id: "idFake",
        name: "nameFake",
        reference: "refFake",
        price: 678,
        updated_at: new Date(),
        created_at: new Date(),
    } as ProductDto;
}
