import { client } from ".";

const urls = {
	list: "/member/cart/list",
    insert: "/member/cart/insert",
    update: "/member/cart/update",
    delete: "/member/cart/delete",
};

/* ==============================
   장바구니 리스트
============================== */
export function carts() {
	return client.get(urls.list);
}

/* ==============================
   장바구니 등록
============================== */
export function cartInsert(cart) {
	return client.post(urls.insert, cart);
}

/* ==============================
   장바구니 수정
============================== */
export function cartCountUpdate(item, type) {
   const data = {
      cartId: item.cartId,
      itemId: item.itemId,
      count: item.count + type
   }
	return client.patch(urls.update, data);
}

/* ==============================
   장바구니 삭제
============================== */
export function cartDelete(id) {
	return client.delete(`${urls.delete}/${id}`);
}
