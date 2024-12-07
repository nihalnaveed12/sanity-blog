import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Apply Clerk middleware to all paths except those starting with /studio
    '/((?!studio).*)',
    '/api/(.*)',
  ],
};




