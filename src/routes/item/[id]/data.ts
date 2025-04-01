import type { LoaderFunctionArgs } from '@modern-js/runtime/router';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      headers: {
        Authorization: `Token ${process?.env?.TOKEN}`,
      },
    },
  );
  const data = await response.json();

  return data;
};
