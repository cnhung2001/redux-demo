const { createStore } = window.Redux;
const initialState = ["Listion to music"];

const hobbyReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(hobbyReducer);

const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

  const ulElement = document.querySelector("#hobbyListId");
  if (!ulElement) return;

  ulElement.innerHTML = "";

  for (const hobby of hobbyList) {
    const liElement = document.createElement("li");

    liElement.textContent = hobby;

    ulElement.appendChild(liElement);
  }
};

const initialHobbyList = store.getState();

console.log(initialHobbyList);

renderHobbyList(initialHobbyList);
