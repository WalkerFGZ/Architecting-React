"use client";

import { CartItem } from "@/types/types";
import { ShoppingCartItem } from "@/ui/components/ShoppingCartItem/ShoppingCartItem";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Cart() {
  const { data: cartItem, error } = useSWR<CartItem[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
    fetcher,
    { revalidateOnFocus: true }
  );

  if (error) return <div>Failed to load</div>;
  if (!cartItem) return <div>Loading cart items...</div>;

  return (
    <section className="main-content">
      <h2>Shopping Cart</h2>
      <div className="cart-wrapper">
        <div className="cart-items-wrapper">
          {cartItem.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItem.map((item) => <ShoppingCartItem item={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
