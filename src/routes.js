import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import OnlineShop from "./pages/Online";
import OfflineShop from "./pages/Offline";
import SearchResults from "./pages/SearchResults";
import SingleProduct from "./pages/SingleProduct";
import { Children } from "react";

function Router() {
  let element = useRoutes([
    {
      children: [
        { path: "/home", element: <Home /> },
        { path: "/online", element: <OnlineShop /> },
        { path: "/offline", element: <OfflineShop /> },
        { path: "/searchResults/:id", element: <SearchResults /> },
        { path: "/singleProduct", element: <SingleProduct />},
      ],
    },
  ]);
  return element;
}

export default Router;

{
  /* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/online" element={<OnlineShop />} />
          <Route path="/offline" element={<OfflineShop />} />
          <Route path="/searchResults" element={<SearchResults />} />
        </Routes> */
}
