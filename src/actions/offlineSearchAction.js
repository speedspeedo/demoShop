import { OFFLINESEARCH } from "./types";

export const offlineSearch = ({keyword, district}) => (dispatch) => {
  dispatch({
    type: OFFLINESEARCH,
    payload: {
      keyword,
      district,
    },
  });
};
