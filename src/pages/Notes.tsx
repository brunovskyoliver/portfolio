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
    console.log("user");
  }
  else {
    router.push("/");
    }

  return (
    <Layout>
      <Head>
        <title>Notes - brunovsky.online</title>
      </Head>
      <main className="z-10">
        <section className='border-2 border-solid border-white rounded-2xl w-full h-fit z-10 relative'>
          <div className="flex flex-row overflow-hidden rounded-2xl w-full h-60 bg-black">
            <div className=" overflow-hidden w-1/3 flex flex-col ">
              <div className="h-1/2 w-full justify-center text-center flex items-center">
                <p className="text-2x1 font-mono">A</p>
              </div>
              <div className="h-1/2 w-full justify-center text-center flex items-center">
              <p className="text-2x1 font-mono">A</p>
              </div>
            </div>
            <div className=" overflow-hidden w-1/3 flex flex-col">
            <div className="h-1/2 w-full justify-center text-center flex items-center">
            <p className="text-2x1 font-mono">A</p>
            </div>
            <div className="h-1/2 w-full justify-center text-center flex items-center">
            <p className="text-2x1 font-mono">A</p>
            </div>
            </div>
            <div className=" overflow-hidden w-1/3 flex flex-col ">
            <div className="h-1/2 w-full justify-center text-center flex items-center">
            <p className="text-2x1 font-mono">A</p>
            </div>
            <div className="h-1/2 w-full justify-center text-center flex items-center">
            <p className="text-2x1 font-mono">A</p>
            </div>
            </div>
          </div>
        </section>
      </main>

  </Layout>
  );
}