import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactInfo } from "../../data/CompanyInformation.js";

const sendFormMock = vi.fn();

vi.mock("@emailjs/browser", () => ({
  default: { sendForm: (...args) => sendFormMock(...args) },
}));

async function renderWithEnv(env = {}) {
  vi.resetModules();
  vi.stubEnv("VITE_EMAILJS_SERVICE_ID", env.serviceId ?? "");
  vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", env.templateId ?? "");
  vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", env.publicKey ?? "");

  const { default: Contacts } = await import("./Contacts.jsx");
  const user = userEvent.setup();
  render(<Contacts />);

  return { user };
}

async function fillAndSubmit(user) {
  await user.type(screen.getByLabelText(/nombre completo/i), "Juan Pérez");
  await user.type(screen.getByLabelText(/correo electrónico/i), "juan@empresa.com");
  await user.type(screen.getByLabelText(/detalle del requerimiento/i), "Necesito un presupuesto");
  await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));
}

describe("Contacts", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    sendFormMock.mockReset();
  });

  it("points the tel: link to the phone number it displays", async () => {
    await renderWithEnv({ serviceId: "s", templateId: "t", publicKey: "k" });

    const phoneLink = screen.getByText(ContactInfo.phoneNumber).closest("a");

    expect(phoneLink).toHaveAttribute("href", `tel:${ContactInfo.phoneNumber.replace(/\s+/g, "")}`);
  });

  it("shows a configuration error when the EmailJS env vars are missing", async () => {
    const { user } = await renderWithEnv();

    await fillAndSubmit(user);

    expect(
      await screen.findByText(/todavía no está configurado para enviar mensajes/i),
    ).toBeInTheDocument();
    expect(sendFormMock).not.toHaveBeenCalled();
  });

  it("shows a success message when EmailJS sends the message", async () => {
    sendFormMock.mockResolvedValueOnce({ status: 200, text: "OK" });
    const { user } = await renderWithEnv({ serviceId: "s", templateId: "t", publicKey: "k" });

    await fillAndSubmit(user);

    expect(await screen.findByText(/mensaje enviado correctamente/i)).toBeInTheDocument();
  });

  it("shows an error message when EmailJS rejects the submission", async () => {
    sendFormMock.mockRejectedValueOnce(new Error("network error"));
    const { user } = await renderWithEnv({ serviceId: "s", templateId: "t", publicKey: "k" });

    await fillAndSubmit(user);

    expect(await screen.findByText(/no se pudo enviar el mensaje/i)).toBeInTheDocument();
  });
});
