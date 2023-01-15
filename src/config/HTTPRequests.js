const APP_ENV = "developments";
const BASE_URL = "http://localhost:5000";
const PRODUCTION_URL = "https://blush-rhinoceros-tutu.cyclic.app";

const URL = APP_ENV === "development" ? BASE_URL : PRODUCTION_URL;

export { URL };
