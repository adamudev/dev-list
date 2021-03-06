import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev List - Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id
          molestias nemo eligendi quos modi officia numquam voluptatibus
          sapiente error?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id
          molestias nemo eligendi quos modi officia numquam voluptatibus
          sapiente error?
        </p>
        <Link href="/devs/">
          <a className={styles.btn}>See Dev Listing</a>
        </Link>
      </div>
    </>
  );
}
