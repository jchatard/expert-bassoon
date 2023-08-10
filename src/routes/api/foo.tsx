import {type APIEvent, json } from "solid-start/api";
import {CacheGet} from "~/lib/cache";


export async function GET({ params }: APIEvent) {
  let value = await CacheGet(params.slug);

  if (!value) {
    value = "something which takes a long time to compute";
  }

  return json(value);
}
