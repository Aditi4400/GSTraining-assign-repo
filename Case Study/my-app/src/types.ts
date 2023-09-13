// custom datatype definitions here
export type ProductType = {
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    productSalePrice: number;
    productStock: number;
  };

  export type UserType = {
    kind:         string;
    localId:      string;
    email:        string;
    displayName:  string;
    idToken:      string;
    registered:   boolean;
    refreshToken: string;
    expiresIn:    string;
}

export type cartType = {
  count:number;
  product: ProductType;
}
