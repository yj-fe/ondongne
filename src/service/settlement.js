import { client } from "./index";

const urls = {
    get: "/biz/settlement/get",
};

export function getSettlement(data) {
    return client.get(`${urls.get}?storeId=${data.storeId}&date=${data.date}`);
}
