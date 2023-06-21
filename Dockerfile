FROM docker.io/library/alpine
RUN apk add pnpm --repository=http://dl-cdn.alpinelinux.org/alpine/edge/testing
COPY . /web
WORKDIR "/web"
CMD pnpm serve
