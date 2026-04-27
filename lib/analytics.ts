declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export const track = {
  phoneCallClicked: (location: string) =>
    pushEvent("phone_call_clicked", { location }),

  formStarted: (location: string) =>
    pushEvent("callback_form_started", { location }),

  formSubmitted: (location: string) =>
    pushEvent("callback_form_submitted", { location }),

  menuOpened: () =>
    pushEvent("menu_opened"),

  sectionViewed: (section: string) =>
    pushEvent("section_viewed", { section }),
};
