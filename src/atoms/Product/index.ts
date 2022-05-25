import {atomFamily} from "recoil";

interface Item {
  id: number,
  title: string,
  price: string,
}

export const productInfoState = atomFamily<Item, number>({
  key: 'productInfo',
  default: (id) => {
    return {
      id,
      title: '',
      price: '',
    };
  },
});
