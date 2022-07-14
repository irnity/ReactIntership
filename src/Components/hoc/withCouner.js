import React, { useState } from 'react';

const UpdatedComponent = (OriginalComponent) => {
  function withCouner({ ...props }) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <OriginalComponent count={count} increment={increment} {...props} />
    );
  }
  return withCouner;
};

export default UpdatedComponent;
