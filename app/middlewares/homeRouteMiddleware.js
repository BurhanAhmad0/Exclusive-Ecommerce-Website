import { NextResponse } from "next/server";

export function homeRouteMiddleware(middleware) {
  return async (request, event, response) => {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.rewrite(new URL('/home', request.url));
    }

    return middleware(request, event, response);
  };
}
