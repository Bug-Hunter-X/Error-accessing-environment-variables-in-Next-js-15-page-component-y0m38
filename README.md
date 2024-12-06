# Next.js 15 Environment Variable Access Error

This repository demonstrates a common error encountered when accessing environment variables within Next.js 15 page components.  The issue arises because the `process` object, which is used to access environment variables on the server-side, is not available in the browser environment.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You should see an error in the browser's console because `process.env.MY_VARIABLE` is undefined in the browser.

## Solution

The solution involves using the `process.env` method only on the server-side and providing a fallback value for the client-side.
