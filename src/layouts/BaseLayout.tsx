import React from "react";

interface Props {
  children: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
};

export default BaseLayout;
