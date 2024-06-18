export interface ProductAll {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  export interface StoreProduct{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity:number;
  }

  export interface stateProps{
    productData:[];
    favoriteData:[];
    userInfo:[];
    userInfo:null| string;
    next:any
  }
  export interface CartProductItem{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity:number;
  }