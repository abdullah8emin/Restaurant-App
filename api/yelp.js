import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer Jv1lh8SaAcgB17LjPiSf6K2fqNvncaVKF79lzHSDXVImZ17GJc4rmP9z6Pfjab7W7mBgdgyJkPIBp8xc-tDRM0_oVWWINpiRFUz_bUMEZWANBPDJc99DIpETC45oZ3Yx',
    },
});
