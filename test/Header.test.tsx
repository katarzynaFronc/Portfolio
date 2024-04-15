import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Header } from "../src/components/Header.component";
import React from "react";
import { MemoryRouter } from "react-router-dom";

describe("Renders header correctly", async () => {
  it("Should render header correctly", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const span = await waitFor(() => {
      screen.findByText("Katarzyna Fronc");
    });

    expect(span).not.toBeNull();
  });
});
