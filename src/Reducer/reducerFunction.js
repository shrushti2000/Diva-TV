const reducerFunction = (state,action) => {
  switch(action.type){
      case 'SET_CATEGORIES':return {...state,categories:action.payload}
      case 'SET_VIDEOS':return {...state,videos:action.payload}
  }
}

export default reducerFunction