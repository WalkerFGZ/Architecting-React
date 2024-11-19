import AddToCartButton from "@/ui/components/Button/AddToCartButton";
import Image from "next/image";
import { ItemInfo } from "@/ui/components/PieInfo/ItemInfo";

export default async function All() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=all`,
    { cache: "no-cache" }
  );
  const pies = await res.json();
  return (
    <>
      <section className="main-content">
        <h2>All Pies</h2>
        <div className="gallery-wrapper">
          {pies.map((pie: any) => (
            <ItemInfo item={pie} />
          ))}
        </div>
      </section>
    </>
  );
}
