import { eq } from "lodash";
export const API_HOST = eq(process.env.NODE_ENV, "production")
  ? `https://${window.location.host}/`
  : "http://localhost:8080/";
