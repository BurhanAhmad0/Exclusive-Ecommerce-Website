import { NextResponse } from "next/server";

export function homeRouteMiddleware(middleware) {
  return async (request, event, response) => {
    if (request.nextUrl.pathname === '/home') {
      return NextResponse.rewrite(new URL('/', request.url));
    }

    return middleware(request, event, response);
  };
}
