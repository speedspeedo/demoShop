import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onlineSearch } from '../../actions/onlineSearchAction'

const OnlineShop = () => {
  const [searchData, setSearchData] = useState({})
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const showResult = () => {
    dispatch(onlineSearch(searchData))
    navigate("/searchResults/online", { replace: true });
  };

  const handleKeywordChange = (e) => {
    const keyword = e.target.value
    setSearchData({
      ...searchData,
      keyword
    })
  }
  const handleDistrictChange = (e) => {
    const district = e.target.value
    setSearchData({
      ...searchData,
      district
    })
  }
  const handleKeyChange = (e) => {
    const api_key = e.target.value
    setSearchData({
      ...searchData,
      api_key
    })
  }
  const handleSecretChange = (e) => {
    const secret = e.target.value
    setSearchData({
      ...searchData,
      secret
    })
  }

  return (
    <>
      <form>
        <div class="mb-6  mx-auto">
          <label
            for="text"
            class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white"
          >
            api_key
          </label>
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleKeyChange}
            value={searchData.api_key}
            required
          />
        </div>
        <div class="mb-6 mx-auto">
          <label
            for="text"
            class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white"
          >
            secret
          </label>
          <input
            type="text"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSecretChange}
            value={searchData.secret}
            required
          />
        </div>
        <div class="mb-6 mx-auto">
          <label
            for="text"
            class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white"
          >
            SearchKeyword
          </label>
          <input
            type="text"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleKeywordChange}
            required
            value={searchData.keyword}
          />
        </div>
        <div class="mb-6 mx-auto">
          <label
            for="countries"
            class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white"
          >
            Select an District
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleDistrictChange}
          >
            <option selected>Choose a District</option>
            <option value="taobao">taobao</option>
          </select>
        </div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-8xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={showResult}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default OnlineShop;
