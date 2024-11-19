import { CartItem } from "@/types/types";
import Image from "next/image";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

export function ShoppingCartItem({ item }: { item: CartItem }) {
  return (
    <div className="cart-item" key={item.id}>
      <div className="cart-item-image-wrapper">
        <Image
          src={item.imageUrl}
          alt={`image of ${item.name}`}
          width={100}
          height={100}
        />
      </div>
      <div className="cart-item-details-wrapper">
        <p className="cart-item-name">{item.name}</p>
        <div className="quantity-selector-wrapper">
          <QuantitySelector item={item} />
        </div>
      </div>
    </div>
  );
}
