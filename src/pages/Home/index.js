import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const joinOnline = () => {
    navigate("/online", { replace: true });
  };

  const joinOffline = () => {
    navigate("/offline", { replace: true });
  };

  return (
    <div id="btns">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-8xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={joinOnline}
      >
        Online
      </button>
      <button
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-8xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={joinOffline}
      >
        Offline
      </button>
    </div>
  );
};

export default Home;
