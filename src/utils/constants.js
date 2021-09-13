export function getAPIs(){
    const baseURL = "https://backend.plotnetwork.in/";
    // const baseURL = "http://localhost:1337/";


    return {
        'login': baseURL + 'broker_login',
        'broker': baseURL + 'broker',
        'salesmanager': baseURL + 'salesmanager',
        'lead': baseURL + 'lead',
        'leadexport': baseURL + 'leadexport',
        'older_broker_auth': baseURL + 'older_Broker_Login',
        'baseURL': baseURL
    }
}