import { Fragment } from "react";
import Job from "./Job";

export default function Jobs({ jobs }) {
  return (
    <Fragment>
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Recent Jobs
              </h1>
              {/* <post-filter></post-filter> */}
            </div>
            <div className="mt-6 space-y-4" v-for="post in posts">
              {jobs.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </div>
            <div className="mt-8">{/* <Pagination></Pagination> */}</div>
          </div>
          {/* <div className="-mx-8 w-4/12 hidden lg:block">
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">
                Categories
              </h1>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">
                Recent Post
              </h1>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}
