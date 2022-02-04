import {usecase_list} from "../src/core/useCases/products/list";
import {usecase_show} from "../src/core/useCases/products/show";
import {usecase_create} from "../src/core/useCases/products/create";
import {usecase_update} from "../src/core/useCases/products/update";
import {productRepository} from "../src/infra/data/inMemory/products/productRepository";
import {Product} from "../src/core/domain/products/product";
import * as moment from "moment";

test('should list the products', async () => {
    const products: Product[] = await usecase_list(productRepository)
    expect(products.length).toBe(2)
});

test('should display a product', async () => {
    const product: Product = await usecase_show(productRepository, 'id2')
    expect(product.id).toBe('id2');
    expect(product.name).toBe('tv');
    expect(product.reference).toBe('ref2');
    expect(product.price).toBe(56);
});

test('should return none if the id product doesn\'t match', async () => {
    const product = await usecase_show(productRepository, 'doest_exist')
    expect(product).toBeNull();
});

test('should create a new product', async () => {
    const product: Product = await usecase_create(productRepository, {
        id: 'id1',
        name: 'name1',
        reference: 'ref1',
        price: 45,
    })
    expect(product.id).toBe('id1');
    expect(product.name).toBe('name1');
    expect(product.reference).toBe('ref1');
    expect(product.price).toBe(45);
});

test('should edit a product', async () => {
    const product: Product = await usecase_update(productRepository, {
        name: 'name1_updated',
    }, 'id1')
    const duration: number = moment.duration(moment(Date()).diff(moment(product.updated_at))).asSeconds();
    expect(product.name).toBe('name1_updated');
    expect(duration).toBeLessThan(1);
});
