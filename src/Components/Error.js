// use error router to make beautiful errors
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("error is", err);
  return (
    <div>
      <h1>error </h1>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};
export default Error;
