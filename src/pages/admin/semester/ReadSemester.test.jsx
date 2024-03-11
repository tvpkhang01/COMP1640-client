// Importing required libraries
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReadSemester from './ReadSemester';

// Mocking react-router-dom's useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mocking window.matchMedia
beforeAll(() => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });
});

describe('ReadSemester Component', () => {
  test('clicking "Create new Semester" button navigates to create page', () => {
    const navigateMock = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

    const { getByText } = render(
      <Router>
        <ReadSemester />
      </Router>
    );

    fireEvent.click(getByText('Create new Semester'));
    
    expect(navigateMock).toHaveBeenCalledWith('create');
  });
});
