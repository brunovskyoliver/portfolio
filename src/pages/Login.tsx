import Layout from './Layout';
import { useState } from 'react';

export default function Login(): JSX.Element {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
  
    if (res.ok) {
      // The login was successful, handle the response here
      const { token } = await res.json()
      console.log('Session token:', token)
    } else {
      // The login failed, handle the error here
      console.error('Login failed')
    }
  }
  

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen z-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10" onSubmit={handleSubmit}>
          <div className="mb-4 z-10">
            <label className="block text-gray-700 font-bold mb-2 z-10" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline z-10"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 z-10">
            <label className="block text-gray-700 font-bold mb-2 z-10" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline z-10"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between z-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-10"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
