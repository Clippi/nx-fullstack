FROM docker.io/node:lts-alpine

WORKDIR /app

RUN addgroup --system trpc-server && \
          adduser --system -G trpc-server trpc-server

COPY dist/apps/trpc-server dist
RUN chown -R trpc-server:trpc-server .

CMD [ "node", "dist" ]