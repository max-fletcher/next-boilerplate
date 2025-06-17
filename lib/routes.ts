/**
 * login route
 */
export const LOGIN = "/api/auth/signin"; // NOTE: Should match with routes defined inside pages object(in CredentialsProvider) if you have it, or with default

/**
 * root route(where user will be redirected if he is authenticated but tries to go to login/register page)
 */
export const ROOT = "/dashboard";

/**
 * auth routes
 */
export const AUTH_ROUTES = ["/api/auth/signin"];

/**
 * private routes
 */
export const PRIVATE_ROUTES = [
  "/dashboard",
];