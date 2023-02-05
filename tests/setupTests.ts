import { vi } from "vitest";

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
  value: () => `blob:asdsadljlsdjl/asdasd}`,
});
