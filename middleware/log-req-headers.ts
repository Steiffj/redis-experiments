export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  console.log(
    `======== Request headers for ${getRequestURL(event).pathname} ========`
  );
  for (const header of Object.entries(headers)) {
    console.log(`${header[0]}: ${header[1]}`);
  }
});
