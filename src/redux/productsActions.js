export const AddProduct = (name, price, discount, seller, pic) => {
  return {
    type: "ADD_PRODUCT",
    name: name,
    price: price,
    seller: seller,
    discount: discount,
    pic: pic,
  };
};
