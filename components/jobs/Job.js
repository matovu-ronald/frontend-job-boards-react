import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import API_URL from "../../apiUrl";

export default function Job({ job }) {
  return (
    <Fragment>
      <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">{job.date}</span>
          <Link
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href=""
          >
            {/* {data.tag} */}
          </Link>
        </div>
        <div className="mt-2">
          <Link
            className="text-2xl text-gray-700 font-bold hover:underline"
            href={`/jobs/${job.slug}`}
          >
            {job.vacancy}
          </Link>
          <p className="mt-2 text-gray-600">{job.excerpt}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link
            className="text-blue-500 hover:underline"
            href={`/jobs/${job.slug}`}
          >
            Read more
          </Link>
          <div>
            <Link className="flex items-center" href="#">
              <Image
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                alt={"Photo of " + job.recruiter}
                src={`${API_URL}/storage/${job.image}`}
                width={300}
                height={300}
              />
              <h1 className="text-gray-700 font-bold hover:underline">
                {job.recruiter}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
