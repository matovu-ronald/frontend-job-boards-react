import axios from "axios";
import Link from "next/link";
import API_URL from "../../apiUrl";
import Jobs from "../../components/jobs/Jobs";

const JobPage = ({ jobs }) => {
  // Minimising the paragrahps on the card component
  const MAX_LENGTH = 250;

  return (
    <>
      <Jobs jobs={jobs} />
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
