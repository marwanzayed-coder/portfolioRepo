import { Cairo } from "next/font/google";
import { NextSeo } from "next-seo";

const cairo = Cairo({ subsets: ["latin"] });

export default function E500() {
  return (
    <>
      <NextSeo title="500 - Leinda Demy | Front End Dev" />
      <main
        className={
          cairo.className + " h-screen flex justify-center items-center"
        }
      >
        <div className="bg-background dark:bg-background-dark">
          <div className="text-center px-2">
            <div className="inline-flex rounded-full bg-red-100 p-4">
              <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 16L22 21M22 16L17 21"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h1 className="mt-5 text-[36px] font-bold text-slate-800 dark:text-slate-200 lg:text-[50px]">
              500 - Server Error
            </h1>
            <p className="text-slate-600 dark:text-slate-100 mt-5 lg:text-lg mb-7">
              Sorry, An Error Occurred In The Server, Try To Come Back Soon
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
