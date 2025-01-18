// middlewares/chain.js
import { NextResponse } from 'next/server';

/**
 * @typedef {function} CustomMiddleware
 * @param {NextRequest} request
 * @param {NextFetchEvent} event
 * @param {NextResponse} response
 * @returns {NextMiddlewareResult | Promise<NextMiddlewareResult>}
 */

/**
 * @typedef {function} MiddlewareFactory
 * @param {CustomMiddleware} middleware
 * @returns {CustomMiddleware}
 */

/**
 * Chains middleware functions together.
 * 
 * @param {MiddlewareFactory[]} functions - Array of middleware factories.
 * @param {number} [index=0] - Current index in the middleware chain.
 * @returns {CustomMiddleware} - The composed middleware function.
 */
export function chain(functions, index = 0) {
    const current = functions[index];

    if (current) {
        const next = chain(functions, index + 1);
        return current(next);
    }

    return (request, event, response) => {
        return response;
    };
}
