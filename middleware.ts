import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { AUTH_ROUTES, LOGIN, PRIVATE_ROUTES, ROOT } from "@/lib/routes";

// NOTE: This is how you define a middleware in Next JS. For the Redirect/Conditinal redirect examples, try visiting "/api/hello2" and you will be redirected
// to "/api/hello" as per the conditions below.

export default withAuth(
// NOTE: Accepting the request that comes from the client(as per the standard for all middlewares)
  async function middleware(request) {
    // NOTE: Create a response object that we will eventually either forward to the route file, or will return as a response. Before doing either, we attach a custom header to this.
    const response = NextResponse.next()

    // NOTE: Retrieving a user's theme preference from cookies
    // const themePreference = request.cookies.get('theme')

    // NOTE: If no theme is preset in cookie, set a default value(dark)
    // if(!themePreference){
    //   response.cookies.set('theme', 'dark')
    // }

    // NOTE: Attach a header to the response before sending it back. Check network tab with "All" option selected and you'll see that document named "hello2" has a header with this name & value.
    // response.headers.set('custom-header', 'custom-value')

    /**
   * this is how you get token from request when using nextauth
   */
    const { token } = request.nextauth;
    console.log('token from middleware', token)

    /**
     * get current path name without trailing slashes
     */
    const pathname = request.nextUrl.pathname.replace(/\/$/, "");

    /**
     * define is authenticated as false
     */
    let isAuthenticated = false;
    if (token) {
      isAuthenticated = true;
    }

    const isPrivateRoute = PRIVATE_ROUTES.some((route: string) => {
      return pathname.startsWith(route);
    });

    /**
     * check if current path is auth
     */
    const isAuthRoute = AUTH_ROUTES.some((route: string) => {
      console.log('Es authRoute ?', pathname, route, pathname.startsWith(route))
      return pathname.startsWith(route);
    });

    console.log('middddd', isAuthenticated, isPrivateRoute, isAuthRoute)

    /**
     * redirect to login
     */
    if (!isAuthenticated && isPrivateRoute) {
      console.log('One 1')
      return NextResponse.redirect(new URL(LOGIN, request.url));
    } 
    
    if (isAuthenticated && isAuthRoute) {
      console.log('Two 2')
      // redirect to root
      return NextResponse.redirect(new URL(ROOT, request.url));
    }

    console.log('Three 3')

    // NOTE: Send back the response
    return response

    // NOTE: (Conditinal redirect) This is one way to define which routes this middleware will be applied to.
    // if(request.nextUrl.pathname === "/api/hello2"){
    //   return NextResponse.redirect(new URL('/api/hello', request.url)) // new URL accepts 2 params. 1st param is the relative URL and 2nd is the base URL
    // }

    // NOTE: (Conditinal redirect) Same as above but returning "NextResponse.rewrite" instead of "NextResponse.redirect", which sends the user to "/api/hello" without changing the
    // URL in the browser(i.e "/api/hello2")
    // if(request.nextUrl.pathname === "/api/hello2"){
    //   return NextResponse.rewrite(new URL('/api/hello', request.url)) // new URL accepts 2 params. 1st param is the relative URL and 2nd is the base URL
    // }

    // NOTE: (Redirect)
    // return NextResponse.redirect(new URL('/api/hello', request.url)) // new URL accepts 2 params. 1st param is the relative URL and 2nd is the base URL
  },
  {
    pages: {
      signIn: '/sign-in',
    },
    callbacks: {
      authorized: () => true,
    },
  }
)

// NOTE: (Conditinal redirect) This matcher with regex will only be applied to everything that is inside the app folder and nothing outside of it. In summary, this config ensures that your middleware runs on:
// 1. All non-static page routes (like /dashboard, /about, etc.)
// 2. The homepage /
// 3. API and tRPC endpoints (/api/*, /trpc/*)
// It excludes:
// 1. Static files like images, stylesheets, fonts
// 2. Internal _next/* files (e.g., JavaScript bundles)
export const config = {
  // matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  // # NOTE: test this later since GPT says This may unintentionally apply middleware to public assets like /favicon.ico, /images/..., etc.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icons|public|.*\\.svg$|.*\\.png$|.*\\.jpg$).*)"],
};

// NOTE: (Conditinal redirect) This is another(and preferred) way to define which routes this middleware will be applied to.
// export const config = {
//   matcher: "/api/hello2"
// }