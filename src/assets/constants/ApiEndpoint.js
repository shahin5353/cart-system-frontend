

export class ApiEndpoint {
    static BASE_ENDPOINT = "http://localhost:4000/api/v1";

    static user = {
        getUserDetails : `${ApiEndpoint.BASE_ENDPOINT}/user/getUserDetails` ,
    }
    static product = {
        getAllProducts : `${ApiEndpoint.BASE_ENDPOINT}/products/getProducts`
    }
    static cart = {
        addToCart: `${ApiEndpoint.BASE_ENDPOINT}/cart/addToCart`,
        removeFromCart : `${ApiEndpoint.BASE_ENDPOINT}/cart/removeFromCart`,
        getCart : `${ApiEndpoint.BASE_ENDPOINT}/cart/getCart`,
        resetCart : `${ApiEndpoint.BASE_ENDPOINT}/cart/resetCart`,
    }
    
}