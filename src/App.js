import React, { lazy } from "react";
import Layout from "../src/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import PersistLogin from "./features/auth/PersistLogin";

const Prefetch = lazy(() => import("./features/auth/PreFetch"));
const AppProvider = lazy(() => import("./components/layout/AppProvider"));

const Login = lazy(() => import("./pages/auth/Login"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));

const Faq = lazy(() => import("./pages/FAQ/Faq"));
const SingleFaq = lazy(() => import("./pages/FAQ/SingleFaq"));
const ContactUS = lazy(() => import("./pages/contactUs/ContactUs"));
const PackageService = lazy(() =>
  import("./pages/packageService/PackageService")
);
const Job = lazy(() => import("./pages/job/Job"));
const Packages = lazy(() => import("./pages/packages/Packages"));
const Blog = lazy(() => import("./pages/blogs/Blog"));
const SingleBlog = lazy(() => import("./pages/blogs/SingelBlog"));
const CreatePackage = lazy(() => import("./pages/packages/CreatePackage"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppProvider />}>
        <Route index element={<Login />} />

        <Route path="auth">
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="faq" element={<Faq />} />
              <Route path="faq/:id" element={<SingleFaq />} />
              <Route path="contact-us" element={<ContactUS />} />
              <Route path="package-services" element={<PackageService />} />
              <Route path="jobs" element={<Job />} />
              <Route path="packages" element={<Packages />} />
              <Route path="create-package" element={<CreatePackage />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="blogs/:id" element={<SingleBlog />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
