import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const FormContext = createContext();

export const FormProvider = ({ reducer, initialState, children })=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => useContext(FormContext).state;
export const useDispatch = () => useContext(FormContext).dispatch;

FormProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.node
};
