import { ONLINESEARCH } from "./types";
import { CHANGESTATUS } from "./types";

export const onlineSearch = ({api_key, secret, keyword, district}) => (dispatch) => {
  dispatch({
    type: ONLINESEARCH,
    payload: {
      api_key,
      secret,
      keyword,
      district,
    },
  });
};

// export const changeStatus = ({ status }) => (dispatch) => {
//   dispatch({
//     type: CHANGESTATUS,
//     payload: {
//       status,
//     }
//   });
// };
