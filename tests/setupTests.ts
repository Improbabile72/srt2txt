import { vi } from "vitest";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

/*
 * Stubs WebAPIs not implemented in happy-dom
 *
 * These stubs are required to correctly load the filepond library
 */

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window.document, "visibilityState", {
  writable: false,
  value: "visible",
});

Object.defineProperty(window.CSS, "supports", {
  writable: false,
  value: () => true,
});

Object.defineProperty(window.URL, "createObjectURL", {
  writable: false,
  value: () => "blob:test/test",
});
