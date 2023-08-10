import Redis from "ioredis";

const REDIS_PORT = import.meta.env.VITE_KB_REDIS_PORT ?? 6379;
const REDIS_HOST = import.meta.env.VITE_KB_REDIS_HOST ?? "localhost";


export async function CacheGet(path: string): Promise<any> {
  const cache = new Redis(REDIS_PORT, REDIS_HOST);
  return cache.get(path);
}