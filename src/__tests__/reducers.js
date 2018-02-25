import { products, cart } from '../reducers';

describe('products', () => {
  it('returns the initial state', () => {
    expect(products(undefined, {})).toEqual([]);
  });
});

it('receive products', () => {
  const productList = [
    { id:1, name:'Product 1', price:100, image:'' }
  ];

  expect(
    products([], { type:'REPLACE_PRODUCTS', products:productList })
  ).toEqual(productList);

});
