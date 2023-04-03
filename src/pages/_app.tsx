import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "./Blob.css"
import { useRouter } from "next/router";

const publicPages = ["/SignInPage/[[...index]]", "/SignUpPage/[[...index]]"];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}
