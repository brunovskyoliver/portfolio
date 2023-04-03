import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  RedirectToSignIn,
  SignUp
} from "@clerk/nextjs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./Blob.css";
import { useRouter } from "next/router";

const publicPages = [
  "/SignInPage/[[...index]]",
  "/SignUpPage/[[...index]]",
];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      apiKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      {...pageProps}
    >
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
          <Component {...pageProps} />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}
