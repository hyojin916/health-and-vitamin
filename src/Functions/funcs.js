export function totalPrice(list) {
  return list.reduce(
    (acc, cur) => acc + (cur.price - (cur.price * cur.discount) / 100),
    0
  );
}

export function calcPrice(totalPrice, fee) {
  return totalPrice > fee;
}
