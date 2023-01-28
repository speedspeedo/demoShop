import { useNavigate } from "react-router-dom"; 

const OnlineShop = () => {

    const navigate = useNavigate();

    const showResult = () => {
        navigate('/searchResults', {replace: true});
    }

    return (
        <div>
            <form>
                <div class="mb-6  mx-auto">
                    <label for="text" class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white">api_key</label>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
                <div class="mb-6 mx-auto">
                    <label for="text" class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white">secret</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
                <div class="mb-6 mx-auto">
                    <label for="text" class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white">name</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
                <div class="mb-6 mx-auto">
                <label for="countries" class="block mb-2 text-6xl font-medium text-gray-900 dark:text-white">Select an brand</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
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
        </div>
    )
};

export default OnlineShop;