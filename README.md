This is a Next.js portfolio site for Mark Gill, a senior full stack developer.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open the local site in your browser to see the result.

The homepage is defined in [src/app/page.tsx](src/app/page.tsx).

This project uses `next/font` for typography.

## Contact form

The contact form posts to `src/app/api/contact/route.ts` and delivers mail through Resend. Copy `.env.example` to `.env.local`, create a Resend API key, and configure:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=MarkMGill@yahoo.com
CONTACT_FROM_EMAIL="Gill Software Solutions <contact@your-verified-domain.com>"
```

For initial Resend testing, `Gill Software Solutions <onboarding@resend.dev>` can be used as the sender. Before production, verify your business domain in Resend and use an address on that domain. Keep the API key server-side and add the same variables to the deployment environment.

## Notes

This site is currently static and does not require a backend. Add one if you want a contact form with email delivery, a blog, a CMS, authenticated client portals, or dynamic data storage.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
