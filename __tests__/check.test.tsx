import { render, screen } from "@testing-library/react";

const Page = () => {
  return <h1>1</h1>;
};
describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
