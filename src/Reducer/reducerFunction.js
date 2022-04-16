const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES': return { ...state, categories: action.payload }
    case 'SET_VIDEOS': return { ...state, videos: action.payload }
    case 'SET_SORT_BY_LATEST': return { ...state, sortByLatest: action.payload }
    case 'SET_SELECTED_CATEGORY': return { ...state, selectedCategory: action.payload }
    case 'SET_SHOW_TOAST': return { ...state, showtoast: action.payload }
    case 'SET_PLAY_LIST': return { ...state, playlists: action.payload }
    case 'SHOW_PLAYLIST_MODAL': return { ...state, showPlaylistModal: action.payload }
    default :return state
  }
}

export default reducerFunction