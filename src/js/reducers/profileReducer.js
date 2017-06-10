const initialState = {
  description: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_DESCR': {
      return initialState
    }
  }

  return state
}
