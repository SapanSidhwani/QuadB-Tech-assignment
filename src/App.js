import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ListItem from "./components/ListItem";
import Navbar from "./components/Navbar";
import ShowDetail from "./components/ShowDetail";
import BookingForm from "./components/BookingForm";

function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: '70px', minWidth: '576px' }}>
        <Outlet />
      </div>

    </>
  );
}
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <ListItem key="home" />
        },
        {
          path: '/showdetail/:id',
          element: <ShowDetail key="showdetail" />
        },
        {
          path: '/booktickets/:id',
          element: <BookingForm key="booktickets" />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App;
