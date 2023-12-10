import { Redis } from "./Redis";

let r: Redis;

export default eventHandler(async (event) => {
  const key = event.context.params.key;
  try {
    if (!r) {
      r = new Redis();
    }
    await r.connnect();
    const value = await r.client.get(key);
    return value ?? `${key} not found in Redis`;
  } catch (error) {
    return "Error!";
  }
});
