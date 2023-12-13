import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import raman from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raman Bayramov Protofolio</title>
        <meta name="description" content="R" />
        <link rel="icon" href=".favicon.ico" />
      </Head>
      <main className="ng-white px-10">
        {/*   section- 1 */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Raman</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Raman Bayramov
            </h2>
            <h3 className="text-2xl py-2">Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden">
            <Image src={raman} alt="profile" layout="fill" objectFit="cover" />
          </div>
        </section>
        {/*   section- 1 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Servives I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="text-center">
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="flex flex-col items-center mx-auto shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="flex flex-col items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
