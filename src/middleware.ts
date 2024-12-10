import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  secretKey:process.env.CLERK_SECRET_KEY
});

export const config = {
  matcher: [
    // Apply Clerk middleware to all paths except those starting with /studio
    '/((?!studio).*)',
    '/api/(.*)',
  ],
};




