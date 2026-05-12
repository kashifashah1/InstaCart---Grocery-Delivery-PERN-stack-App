import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";

const AppLayout = () => {
  return (
    <>
      {/* Banner */}
      <Banner/>
      <p>navbar</p>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>footer</p>
      <p>card sidebar</p>
    </>
  );
};

export default AppLayout;
