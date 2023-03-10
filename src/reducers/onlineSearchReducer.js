
const initialState = {}

const onlineSearchReducer = (state = initialState , action) => {
    const { type , payload } = action

    switch (type) {
        case 'ONLINESEARCH':
          return {
            ...state,
            api_key: payload.api_key,
            secret: payload.secret,
            keyword: payload.keyword,
            district: payload.district,
          }
        default:
          return state;
      }
}

export default onlineSearchReducer