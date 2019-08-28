const ADD_HOTSPOT = 'ADD_HOTSPOT';
const DELETE_HOTSPOT = 'DELETE_HOTSPOT';

const storage = localStorage.getItem('listHotspot');

function validaStorage() {
  if (storage) {
    if (JSON.parse(storage).listHotspot) {
      return JSON.parse(storage).listHotspot;
    }
  }
  return null;
}

const initialState = {
  listHotspot: validaStorage() || [],
};

function addHotspot(state, action) {
  const list = state.listHotspot;
  list.push(action.value);
  const newState = {
    ...state,
    listHotspot: list,
  };
  localStorage.setItem('listHotspot', JSON.stringify(newState));
  return newState;
}

function deleteHotspot(state, action) {
  const list = state.listHotspot;
  const newArr = list.filter(item => item.key !== action.value);

  const newState = {
    ...state,
    listHotspot: newArr,
  };

  localStorage.setItem('listHotspot', JSON.stringify(newState));
  return newState;
}

export default function hotspotReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HOTSPOT:
      return addHotspot(state, action);
    case DELETE_HOTSPOT:
      return deleteHotspot(state, action);
    default:
      return state;
  }
}

export function addHotspotAction(value) {
  return {
    type: ADD_HOTSPOT,
    value,
  };
}

export function deleteHotspotAction(value) {
  return {
    type: DELETE_HOTSPOT,
    value,
  };
}
