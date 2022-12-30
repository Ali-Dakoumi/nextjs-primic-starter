import CommerceSDK from "@chec/commerce.js";

// eslint-disable-next-line no-undef
const commerce = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_API_PUBLIC_KEY);

export default commerce;
