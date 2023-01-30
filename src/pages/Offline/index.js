import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { offlineSearch } from '../../actions/offlineSearchAction'

import axios from 'axios';
import { useDispatch } from 'react-redux';

const OfflineShop = () => {

  const [searchData, setsearchData] = useState({});
  const [optionList, setOptionList] = useState([]);
  const [options, setOptions] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const showResult = () => {
    dispatch(offlineSearch(searchData));
    navigate('/searchResults/offline', {replace: true});
  }

  useEffect(() => {
    async function fetchData(){
      const getData = await axios.get(`http://192.168.125.74:8000/api/search-history`);
      const results = getData.data;
      setOptionList( results.map((result) => {
        return (
          <option>{`${result.District}/${result.SearchKeyword}`}</option>
        )
      }));
    }
    
    fetchData()
    
  }, []);

  const handleChange = (e) => {
    const data = e.target.value;
    console.log(data);
    if(data === 'All products') {setsearchData({
      ...searchData,
      district: "",
      keyword: "",
    }) } else {
      const temp = e.target.value.split('/');
      const district = temp[0];
      const keyword = temp[1];
      setsearchData({
        ...searchData,
        district,
        keyword,
      })
    }
    // console.log(searchData);
  }


  return (
    <div class="mb-6 w-1/2 mx-auto">
      <label
        for="countries"
        class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
      >
        <option selected>--Choose whatever you want--</option>
        <option>All products</option>
        {optionList}
      </select>

      <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-6xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={showResult}
        >
          Search
        </button>
    </div>
  );
};

export default OfflineShop;
