import React, { lazy } from "react"
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
} from "react-router-dom"
import PersistLogin from "./features/auth/PersistLogin"

const Prefetch = lazy(() => import("./features/auth/PreFetch"))
const AppProvider = lazy(() => import("./components/layout/AppProvider"))

const Login = lazy(() => import("./pages/auth/Login"))
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"))
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))

const Faq = lazy(() => import("./pages/FAQ/Faq"))
const ContactUS = lazy(() => import("./pages/contactUs/ContactUs"))

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
              <Route path="contact-us" element={<ContactUS />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
