import { createClient } from "redis";
import type { RedisClientType } from "redis";

/**
 * Simple Redis client wrapper.
 */
export class Redis {
  readonly client: RedisClientType;

  constructor() {
    this.client = createClient();
    this.client = createClient({
      // url: "redis://127.0.0.1:6379",
      url: "redis://redis-cache:6379",
    });
    this.client.on("error", (err) => console.error("Redis client error", err));
  }

  async connnect() {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
  }
}
