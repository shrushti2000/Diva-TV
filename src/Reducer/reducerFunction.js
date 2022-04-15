const reducerFunction = (state,action) => {
  switch(action.type){
      case 'SET_CATEGORIES':return {...state,categories:action.payload}
      case 'SET_VIDEOS':return {...state,videos:action.payload}
      case 'SET_SORT_BY_LATEST':return {...state,sortByLatest:action.payload}
      case 'SET_SHOW_TOAST': return { ...state, showtoast: action.payload}
  }
}

export default reducerFunction