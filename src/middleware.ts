// Without a defined matcher, this one line applies next-auth to entire project
export { default } from "next-auth/middleware";

//Applies next-auth only to matching routes -can be regex
export const config = { matcher: ["/dashboard", "/dashboard/:path*", "/extras"] };
