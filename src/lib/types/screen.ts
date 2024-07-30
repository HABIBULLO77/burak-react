import { Member } from "./member";
import { Product } from "./product";

/* React App Statae */
export interface AppRootState {
  homePage: HomePageState;
  //productsPage: ProductsPageState;
}

/* HomePage */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/* Products Page */
/* Orders Page */