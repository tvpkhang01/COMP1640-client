import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MainLayout;
