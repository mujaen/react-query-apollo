import React, {lazy, Suspense} from 'react';

interface ContentProps {
  template: string
}

const Spinner = () => {
  return (
    <>
      Loading...
    </>
  );
};

const Content: React.FC<ContentProps> = ({children, template, ...props}) => {
  const TemplateComponent = lazy(() => import('components/Templates/' + template));

  return (
    <>
      {template === undefined ? (children) : (
        <Suspense fallback={<Spinner />}>
          <TemplateComponent {...props} />
        </Suspense>
      )}
    </>
  );
};

export default Content;