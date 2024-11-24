import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Quiz Application', () => {
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  test('renders the first question and options', () => {
    render(<App />);
    const questionElement = screen.getByText(quizData[0].question);
    expect(questionElement).toBeInTheDocument();

    const options = screen.getAllByRole('button');
    expect(options.length).toBe(quizData[0].options.length);

    quizData[0].options.forEach((option, index) => {
      expect(options[index]).toHaveTextContent(option);
    });
  });

  test('handles correct answer selection and moves to the next question', () => {
    render(<App />);
    const correctOption = screen.getByText(quizData[0].answer);

    // Simulate clicking the correct answer
    fireEvent.click(correctOption);

    // Verify the next question is displayed
    const nextQuestionElement = screen.getByText(quizData[1].question);
    expect(nextQuestionElement).toBeInTheDocument();

    const nextOptions = screen.getAllByRole('button');
    expect(nextOptions.length).toBe(quizData[1].options.length);

    quizData[1].options.forEach((option, index) => {
      expect(nextOptions[index]).toHaveTextContent(option);
    });
  });
});
