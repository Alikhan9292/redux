const initialState = {
    budget: 1000,
    expenses: [],
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          ),
        };
      case 'EDIT_BUDGET':
        return {
          ...state,
          budget: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default appReducer;
  