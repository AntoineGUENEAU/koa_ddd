import { ProductDto } from "../src/core/domain/product/product";
import { container } from "../src/container";
import { ListProducts } from "../src/core/useCases/product/ListProducts";
import { ShowProduct } from "../src/core/useCases/product/ShowProduct";
import { CreateProduct } from "../src/core/useCases/product/CreateProduct";
import { UpdateProduct } from "../src/core/useCases/product/UpdateProduct";

test("should list the products", async () => {
    const products: ProductDto[] = await container.resolve(ListProducts).invoke();
    expect(products.length).toBe(2);
});

test("should display a product", async () => {
    const product: ProductDto = await container.resolve(ShowProduct).invoke("id2");
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
    const product: ProductDto = await container.resolve(CreateProduct).invoke({
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
    const productToUpdated: ProductDto = await container.resolve(ShowProduct).invoke("id1");
    const newName = "name_updated";
    const newProductDta: ProductDto = { ...productToUpdated, name: newName };
    const product: ProductDto = await container.resolve(UpdateProduct).invoke(newProductDta, newProductDta.id);
    const date1: any = new Date();
    const date2: any = product.updated_at;
    const duration = Math.abs(date2 - date1);
    expect(duration).toBeLessThan(500);
    expect(product.name).toBe(newName);
});
