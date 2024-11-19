import AddToCartButton from "@/ui/components/Button/AddToCartButton";
import Image from "next/image";
import { ItemInfo } from "@/ui/components/PieInfo/ItemInfo";

async function fetchCheesecakes() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=cheesecakes`,
    { cache: "no-cache" }
  );
  const pies = await res.json();
  return pies;
}
export default async function CheesecakesComponent() {
  const pies = await fetchCheesecakes();
  return (
    <>
      <section className="main-content">
        <h2>Cheesecakes Pies</h2>
        <div className="gallery-wrapper">
          {pies.map((pie: any) => (
            <ItemInfo key={pie.id} item={pie} />
          ))}
        </div>
      </section>
    </>
  );
}
