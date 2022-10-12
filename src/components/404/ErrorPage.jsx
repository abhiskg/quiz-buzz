import React, { Suspense } from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorAnimation = React.lazy(() => import("../animation/ErrorAnimation"));

const ErrorPage = () => {
  const routeError = useRouteError();
  return (
    <div className="mt-20 grid place-items-center">
      <Suspense fallback={<div>404</div>}>
        <ErrorAnimation />
      </Suspense>
      <div className="font-semibold text-red-500">
        {routeError.statusText || routeError.message}
      </div>
      <Link className="text-green-500 underline" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
