import { useLoaderData } from '@modern-js/runtime/router';

const ItemPage = () => {
  const data = useLoaderData();

  return <div className="container-box">{JSON.stringify(data)}</div>;
};

export default ItemPage;
