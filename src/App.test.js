import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react Testing Demo', () => {
  render(<App />);
  const linkElement = screen.getByText("Testing Demo");
  expect(linkElement).toBeInTheDocument();
});
test("renders correctly", () => {
  render(<App />);
  const appElement = screen.getByRole("heading", { level: 1 });
  expect(appElement).toBeInTheDocument();
});
