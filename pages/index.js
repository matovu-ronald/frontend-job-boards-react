import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Jobs from "../components/jobs/Jobs";
import API_URL from "../apiUrl";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ jobs }) {
  return (
    <>
      <Jobs jobs={jobs} />
    </>
  );
}

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
