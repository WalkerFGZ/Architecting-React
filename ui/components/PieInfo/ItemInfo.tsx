import AddToCartButton from "@/ui/ui/components/Button/AddToCartButton";
import { CartItem } from "@/types/types";
import Image from "next/image";

export async function ItemInfo({ item }: { item: CartItem }) {
  return (
    <div className="pie-item">
      <Image
        src={`${item.imageUrl}`}
        alt={item.name}
        width={400}
        height={200}
      />
      <AddToCartButton
        id={item.id}
        name={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
      />
      <div className="item-info">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
      </div>
    </div>
  );
}
