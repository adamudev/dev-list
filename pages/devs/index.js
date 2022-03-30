import Head from "next/head";
import Link from "next/link";
import { developers } from "../../data";
import styles from "../../styles/Devs.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // const data = developers;

  return {
    props: { devs: data },
  };
};

const AllDev = ({ devs }) => {
  return (
    <>
      <Head>
        <title>Dev List - All Devs</title>
      </Head>
      <div className="allDevs">
        <h1 className="title">All Devs</h1>
        {devs.map((dev) => (
          <Link href={`/devs/${dev.id}`} key={dev.id}>
            <a className={styles.single}>
              <h3>{dev.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllDev;
