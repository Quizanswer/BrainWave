/* eslint-disable react/prop-types */

const CommonWrapper = ({ children }) => {
  return (
    <div className="max-w-[1400px] px-4 py-4 xl:py-1 mx-auto my-auto">{children}</div>
  );
};

export default CommonWrapper;
