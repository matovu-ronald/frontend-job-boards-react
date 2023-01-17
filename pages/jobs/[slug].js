import API_URL from "../../apiUrl";
import Link from "next/link";

const DetailedJobs = ({ job }) => {
  const Max_DATE_LENGHT = 10;
  const Max_TIME_LENGHT = 11;

  return (
    <>
      {/* {JSON.stringify(job, null, 2)} */}
      <article className="px-4 py-5 mx-auto max-w-7xl">
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
            {/* {job.attributes.categories.data[0].attributes.type + " LEVEL"} */}
          </p>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {job.vacancy}
          </h1>

          <a className="flex items-center text-gray-700" href="#">
            <div className="avatar">
              <img
                className="flex-shrink-0 object-cover object-center w-24 h-24 rounded-full"
                src={`${API_URL}/storage/${job.image}`}
                alt={"Photo of " + job.recruiter}
              />
            </div>
            <div className="ml-4">
              <p className="font-semibold text-gray-800 text-md">
                {job.recruiter}
              </p>
              <p className="text-sm text-gray-500">
                {job.created_at.substring(0, Max_DATE_LENGHT)}
              </p>
              <p className="text-sm text-gray-500">
                {job.created_at.substring(16, Max_TIME_LENGHT)}
              </p>
            </div>
          </a>
        </div>

        <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
          <p>{job.excerpt}</p>
          <p>{job.description}</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <Link
            href="/jobs"
            className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto"
          >
            Back
          </Link>
        </div>
      </article>
    </>
  );
};

export default DetailedJobs;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/jobs`);
  const { data: jobs } = await res.json();

  const paths = jobs.map((job) => {
    return {
      params: {
        slug: job.slug.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`${API_URL}/api/jobs/${slug}`);
  const { data: job } = await res.json();

  console.log(job);
  return {
    // Passed to the page component as props
    props: { job },
    revalidate: 1,
  };
}

// export const getStaticPaths = async () => {
//   const res = await fetch("<http://localhost:1337/api/jobs?populate=*>");
//   const { data: jobs } = await res.json();

//   const paths = jobs.map((job) => {
//     return {
//       params: {
//         id: job.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const { id } = params;
//   const res = await fetch(`http://localhost:1337/api/jobs/${id}?populate=*`);
//   const { data: job } = await res.json();

//   return {
//     props: { job },
//     revalidate: 1,
//   };
// };
