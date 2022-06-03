import React, { lazy, Suspense, PropsWithChildren } from 'react';

interface ContentProps {
  template?: string;
  [others: string]: unknown;
}

function Spinner(): JSX.Element {
  return <>Loading...</>;
}

function Content({ children, ...props }: PropsWithChildren<ContentProps>) {
  const TemplateComponent = lazy(() => import(`components/Templates/${props.template}`));

  return (
    <>
      {props.template === undefined ? (
        children
      ) : (
        <Suspense fallback={<Spinner />}>
          <TemplateComponent {...props} />
        </Suspense>
      )}
    </>
  );
}

export default Content;