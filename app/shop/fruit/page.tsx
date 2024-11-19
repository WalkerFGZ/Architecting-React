import AddToCartButton from "@/ui/components/Button/AddToCartButton";
import Image from "next/image";
import { ItemInfo } from "@/ui/components/PieInfo/ItemInfo";

export default async function Fruit() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=fruit`
  );
  const pies = await res.json();
  return (
    <>
      <section className="main-content">
        <h2>Fruit Pies</h2>
        <div className="gallery-wrapper">
          {pies.map((pie: any) => (
            <ItemInfo key={pie.id} item={pie} />
          ))}
        </div>
      </section>
    </>
  );
}
