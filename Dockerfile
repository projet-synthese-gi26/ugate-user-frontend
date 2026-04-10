FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --prefer-offline

COPY . .

ARG NEXT_PUBLIC_API_AUTH_URL
ARG NEXT_PUBLIC_API_UGATE_URL
ARG NEXT_PUBLIC_AUTH_API_URL
ARG NEXT_PUBLIC_UGATE_API_URL

RUN export FINAL_NEXT_PUBLIC_AUTH_API_URL="${NEXT_PUBLIC_AUTH_API_URL:-$NEXT_PUBLIC_API_AUTH_URL}" && \
    export FINAL_NEXT_PUBLIC_UGATE_API_URL="${NEXT_PUBLIC_UGATE_API_URL:-$NEXT_PUBLIC_API_UGATE_URL}" && \
    test -n "$FINAL_NEXT_PUBLIC_AUTH_API_URL" && \
    test -n "$FINAL_NEXT_PUBLIC_UGATE_API_URL" && \
    NEXT_PUBLIC_AUTH_API_URL="$FINAL_NEXT_PUBLIC_AUTH_API_URL" \
    NEXT_PUBLIC_UGATE_API_URL="$FINAL_NEXT_PUBLIC_UGATE_API_URL" \
    npm run build

FROM node:20-alpine AS runner

RUN apk add --no-cache curl

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
