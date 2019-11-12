import React from 'react';
import Header from './Header/Header';
import Main from '../containers/Main';
import { FormProvider } from '../contexts/FormContext';

export default function App() {

  const initialState = {
    url: '',
    method: 'get',
    body: '',
    headers: {},
    response: {},
    history: [],
    storeKey: '',
    authUsername: '',
    authPassword: '',
    authToken: ''
  };

  const reducer = (state, action) => {
    switch(action.type) {
      case 'url':
        return { ...state, url: action.payload };
      case 'method':
        return { ...state, method: action.payload };
      case 'body':
        return { ...state, body: action.payload };
      case 'headers':
        return { ...state, headers: action.payload };
      case 'response':
        return { ...state, response: action.payload };
      case 'history':
        return { ...state, history: [...state.history, action.payload] };
      case 'authUsername':
        return { ...state, authUsername: action.payload };
      case 'authPassword':
        return { ...state, authPassword: action.payload };
      case 'authToken':
        return { ...state, authToken: action.payload };
      default:
        return state;
    }
  };
  return (
    <>
      <Header />
      <FormProvider reducer={reducer} initialState={initialState}>
        <Main />
      </FormProvider>

    </>);
}
