This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

To create a route you can create a folder in the app directory. For example, you can add app/name director with its page.tsx file.

To create a nested route, you can nest folders inside each other. For example, you can add a new app/name/address route by nesting two new folders in the app directory.

The /name/address route is composed of three segments:

/ (Root segment)

name (Segment)

address (Leaf segment)

Now lets test this, take the code in step00 and create a directory app/name and a page.tsx file in it.

Edit app/name/page.tsx and make a very simple React component in the file. Note that it is a convention in Next.js that the page in the director is called page.tsx

Also create a directory app/name/address and a page.tsx file in it.

Start the Server:

    npm run dev
Open the Browser:

    http://localhost:3000/name

    http://localhost:3000/name/address

