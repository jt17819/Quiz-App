import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { quizReducer, userReducer } from '../reducers';
import axios from "axios";

const TestProviders = ({ initState, defaultState }) => {
    initState ||= {
        loading: false,
        results: [{ question: "", correct_answer: "", answers: [] }],
        current_question_index: 0,
        score: [],
        playerTurn: 0,
    };
    defaultState ||= {
        user: { username: "", type: "" },
        id: "",
        room: null,
    };

    let testReducer = () => quizReducer(initState, { type: '@@INIT' })
    let testReducerTwo = () => userReducer(defaultState, { type: "@@INIT"})
    const rootReducer = combineReducers({
        quizReducer:testReducer,
        user: testReducerTwo
      })
    const testStore = createStore(testReducer, applyMiddleware(thunk))
    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )


}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

jest.mock("axios");
axios.get.mockResolvedValue({
    data: [
        {
            question: "French is an official language in Canada", correct_answer: true,
        },
    ]
})


// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom/extend-expect';







global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;
// global.render = render;
// global.userEvent = userEvent;