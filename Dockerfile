FROM cgr.dev/chainguard/node:latest as build
WORKDIR /tmp/install
COPY --chown=node --chmod=700 . .
RUN npm install
RUN npm run build
RUN pwd
RUN ls -la .output

FROM cgr.dev/chainguard/node:latest
WORKDIR /app
COPY --from=build --chown=node --chmod=700 /tmp/install/.output .
RUN pwd
RUN ls -la
EXPOSE 3000
CMD [ "./server/index.mjs" ]
