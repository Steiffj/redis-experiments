import { Redis } from "./Redis";

let r: Redis;

export default eventHandler(async (event) => {
  const key = event.context.params.key;
  const value = await readBody<string>(event);
  try {
    if (!r) {
      r = new Redis();
    }
    await r.connnect();
    await r.client.set(key, value);
    return { key, value };
  } catch (error) {
    return "Error!";
  }
});
