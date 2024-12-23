import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MoneyPageProvider } from "../Context";
import { Nav } from "../Componets/Nav";


test("renders component Nav", () => {
    render(
        <MemoryRouter>
            <MoneyPageProvider>
                <Nav />
            </MoneyPageProvider>
        </MemoryRouter>
    );
    const linkElement = screen.getByRole("navigation");
    expect(linkElement).toBeInTheDocument();
});