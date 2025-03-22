
import React from "react";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-4">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-semibold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-stone-500 capitalize italic">{isLoadingIngredients? 'Loading...': ingredients.join(", ")}</p>
    </li>
  );
}

export default OrderItem;
