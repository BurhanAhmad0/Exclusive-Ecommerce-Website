// middleware.js
import { chain } from './app/middlewares/chain';
import { withAuthMiddleware } from './app/middlewares/withAuthMiddleware';
import { homeRouteMiddleware } from './app/middlewares/homeRouteMiddleware';

export default chain([withAuthMiddleware, homeRouteMiddleware]);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|auth/login|auth/signup|/|/home).*)'],
};
