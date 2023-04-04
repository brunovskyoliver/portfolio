import { SignIn, useUser } from "@clerk/nextjs";
import Layout from './Layout';
import Head from 'next/head'
import { useRouter } from "next/router";



export default function Notes(): JSX.Element { 
  const {user} = useUser();
  const router = useRouter();
  const orgId = "org_2NwqhR3YqilSddAl89q4g9dcRMY";
  const isUserInOrganization = user?.organizationMemberships.some(membership => membership.organization.id === orgId);
  if (isUserInOrganization) {
    console.log("User is in organization");
  }
  else {
    console.log("User is not in organization");
    router.push("/");
    }

  return (
    <Layout>
      <Head>
        <title>Notes - brunovsky.online</title>
      </Head>

  </Layout>
  );
}