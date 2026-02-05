import Pocketbase from "pocketbase";

import type { TypedPocketBase } from "./types";

const BASE_URL = "https://server.chizi.dev";
export const api = new Pocketbase(BASE_URL) as TypedPocketBase;
api.autoCancellation(false);
