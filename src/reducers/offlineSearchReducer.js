
const initialState = {}

const offlineSearchReducer = (state = initialState , action) => {
    const { type , payload } = action

    switch (type) {
        case 'OFFLINESEARCH':
          return {
            ...state,
            keyword: payload.keyword,
            district: payload.district
          }
        default:
          return state;
      }
}

export default offlineSearchReducer