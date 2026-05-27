const stripTrailingSlash = (value: string) =>
  value.endsWith("/") ? value.slice(0, -1) : value;

const rawBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5555";

export const API_BASE_URL = stripTrailingSlash(rawBaseUrl);
