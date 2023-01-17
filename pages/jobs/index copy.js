import axios from "axios";
import Link from "next/link";
import API_URL from "../../apiUrl";

const JobPage = ({ jobs }) => {
  // Minimising the paragrahps on the card component
  const MAX_LENGTH = 250;

  return (
    <>
      <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            // <Link key={job.id} href={"/jobs/" + job.id}>
            <div key={job.id}>
              <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="text-gray-900 hover:text-purple-700"
                >
                  {job.vacancy}
                </Link>
              </h2>
              <p className="mb-4 text-sm font-normal text-gray-600">
                {job.excerpt}
              </p>
              <Link className="flex items-center text-gray-700" href="#">
                <div className="avatar">
                  <img
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    src={`${API_URL}/storage/${job.image}`}
                    alt={"Photo of " + job.recruiter}
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {job.recruiter}
                  </p>
                  <p className="text-sm text-gray-600">{job.email}</p>
                </div>
              </Link>
            </div>
            // </Link>
          ))}
        </div>

        {/* btns */}
        <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <Link
            href="/"
            className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto"
          >
            Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default JobPage;

export async function getStaticProps(context) {
  // const res = await fetch(`${API_URL}/jobs?populate=*`);

  const res = await fetch(`${API_URL}/api/jobs`);
  const data = await res.json();
  // const data = await axios.get(`${API_URL}/jobs`);
  return {
    props: {
      jobs: data.data,
    },
  };
}

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:1337/api/jobs?populate=*");
//   const data = await res.json();
//   //   const data = await axios.get(`${API_URL}/jobs?populate=*`);

//   return {
//     props: {
//       jobs: data.data,
//     },
//   };
// };
