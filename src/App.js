import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import BookDetails from "./pages/BookDetails";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { index: true, element: <Home />},
    { path: ':id_book', element: <BookDetails />},
  ]},
  { path: '/auth', element: <Auth />},
  
]);

function App() {
  // const [ isLoggedIn, setIsLoggedIn ] = useState(true);

  return <RouterProvider router={router} />;
}

export default App;
