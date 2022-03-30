import { developers } from "../../data";
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  // const data = developers;

  const paths = data.map((dev) => {
    return {
      params: { id: dev.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  // const data = developers;

  return {
    props: {
      dev: data,
    },
  };
};

const SinglePage = ({ dev }) => {
  return (
    <div>
      <h1 className="title">{dev.name}</h1>
      <p>
        {/* <strong>Kind:</strong> {dev.which} */}
        {dev.email}
      </p>
      <p>
        {/* <strong>Stacks:</strong> {dev.stack} */}
        {dev.website}
      </p>
      <p>
        {/* <strong>Address:</strong> {dev.address.state} */}
        {dev.address.city}
      </p>
    </div>
  );
};

export default SinglePage;
