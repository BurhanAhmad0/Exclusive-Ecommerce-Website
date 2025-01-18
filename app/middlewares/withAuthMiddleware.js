// middlewares/withAuthMiddleware.js
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

/**
 * Middleware to check authentication.
 * 
 * @param {CustomMiddleware} middleware
 * @returns {CustomMiddleware}
 */
export function withAuthMiddleware(middleware) {
  return async (request, event, response) => {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return middleware(request, event, response);
  };
}
