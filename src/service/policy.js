import { client } from ".";

const urls = {
  location: '/policy',

};


/* ==============================
    위치기반정책
============================== */
export function locationPolicy(requestData) {
    return client.post(urls.location, requestData);
};
