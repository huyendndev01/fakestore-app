import { Fragment, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import DefaultLayout from "./components/DefaultLayout";
import { UserLoginContext } from "./context/UserLoginContext";
import HeaderOnly from "./layout/HeaderOnly";
import PrivateRoutes from "./routes/PrivateRoutes";
import { routes } from "./routes/routes";
import { GetAllUser } from "./service/UserServices";
import HomePage from "./pages/HomePage";

function App() {
  const { user, SetAllUser } = useContext(UserLoginContext);

  useEffect(() => {
    getallUser();
  }, []);
  const getallUser = async () => {
    const res = await GetAllUser();
    SetAllUser(res);
  };

  return (
    <div>
      <Routes>
        {routes.map((route, id) => {
          let Page = route.page;
          let Layout = DefaultLayout;
          if (route.isLayout === "header") {
            Layout = HeaderOnly;
          } else if (route.isLayout === null) {
            Layout = Fragment;
          }

          let Private = Fragment;
          if (route.isPrivateRoute === true) {
            Private = PrivateRoutes;
          }

          return (
            <Route
              key={id}
              path={route.path}
              element={
                <Layout>
                  <Private>
                    <Page />
                  </Private>
                </Layout>
              }
            />
          );
        })}
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default App;
