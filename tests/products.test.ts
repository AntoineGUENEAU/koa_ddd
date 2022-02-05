import { Product } from "../src/core/domain/products/product";
import { container } from "../src/container";
import { ListProducts } from "../src/core/useCases/products/ListProducts";
import { ShowProduct } from "../src/core/useCases/products/ShowProduct";
import { CreateProduct } from "../src/core/useCases/products/CreateProduct";
import { UpdateProduct } from "../src/core/useCases/products/UpdateProduct";

test("should list the products", async () => {
    const products: Product[] = await container.resolve(ListProducts).invoke();
    expect(products.length).toBe(2);
});

test("should display a product", async () => {
    const product: Product = await container.resolve(ShowProduct).invoke("id2");
    expect(product.id).toBe("id2");
    expect(product.name).toBe("tv");
    expect(product.reference).toBe("ref2");
    expect(product.price).toBe(56);
});

test("should return none if the id product doesn't match", async () => {
    const product = await container.resolve(ShowProduct).invoke("doest_exist");
    expect(product).toBeNull();
});

test("should create a new product", async () => {
    const product: Product = await container.resolve(CreateProduct).invoke({
        id: "id1",
        name: "name1",
        reference: "ref1",
        price: 45,
    });
    expect(product.id).toBe("id1");
    expect(product.name).toBe("name1");
    expect(product.reference).toBe("ref1");
    expect(product.price).toBe(45);
});

test("should update a product", async () => {
    const product: Product = await container.resolve(UpdateProduct).invoke(
        {
            name: "name1_updated",
        },
        "id1"
    );
    const date1: any = new Date();
    const date2: any = product.updated_at;
    const duration = Math.abs(date2 - date1);
    expect(duration).toBeLessThan(500);
    expect(product.name).toBe("name1_updated");
});
