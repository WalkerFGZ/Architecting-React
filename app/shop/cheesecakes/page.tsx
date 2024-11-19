import CheesecakesComponent from "./cheesecakes";
import Loading from "@/ui/components/Loading/Loading";
import { Suspense } from "react";

export default async function Cheesecakes() {
  return (
    <Suspense fallback={<Loading />}>
      <CheesecakesComponent />
    </Suspense>
  );
}
