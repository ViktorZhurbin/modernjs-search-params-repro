import './index.css';
import { useLoaderData } from '@modern-js/runtime/router';

const Index = () => {
  const data = useLoaderData();

  return <div className="container-box">{JSON.stringify(data)}</div>;
};

export default Index;
