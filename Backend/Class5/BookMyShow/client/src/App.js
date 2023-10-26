import logo from './logo.svg';
import './App.css';
import SignIn from './components/Singin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieList from './components/MovieList';
import DashboardLayout from './layouts/DashboardLayout';
import TheatreList from './components/TheatreList';
import Show from './components/Show';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <DashboardLayout title={'Home Page'}>Dashboard!</DashboardLayout>,
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/movies/:movieId',
    element: <DashboardLayout title={'Theatres'}><TheatreList /></DashboardLayout>
  },
  {
    path: '/movies',
    element: <DashboardLayout title={'Movies'}><MovieList /></DashboardLayout>
  },
  {
    path: '/show/:showId',
    element: <DashboardLayout title={'Show'}><Show /></DashboardLayout>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
