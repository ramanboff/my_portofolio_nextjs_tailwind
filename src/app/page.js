import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raman Bayramov Protofolio</title>
        <meta name="description" content="R" />
        <link rel="icon" href=".favicon.ico" />
      </Head>
      <main className="ng-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Raman</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className=" cursor-pointer text-2xl"/></li>
              <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
