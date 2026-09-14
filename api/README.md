# mywebsite-api

NestJS service behind the commit ledger on the site. One public endpoint.

```
GET /api/v1/activity
```

Returns the GitHub contribution calendar, the current streak and the most recent
push commits, wrapped in the standard response envelope.

## Why it exists

The front end could call GitHub directly, but then the token sits in the browser
and every visitor burns rate limit. This service holds the token, caches the
response for 30 minutes and rate limits callers to 30 requests a minute.

## Run it

```bash
npm install
cp .env.example .env   # add a GitHub token
npm run start:dev
```

## Checks

```bash
npm test
npm run typecheck
```
