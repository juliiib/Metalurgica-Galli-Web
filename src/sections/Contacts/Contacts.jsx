import { useState } from "react"
import { ContactInfo } from "../../data/CompanyInformation.js"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import emailjs from "@emailjs/browser"
import "./contacts.css"

const emailConfig = {
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
	templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const iconPaths = {
	phone: (
		<>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.06 8.94a16 16 0 0 0 6 6l1.32-1.27a2 2 0 0 1 2.1-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
		</>
	),
	email: (
		<>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 6-10 7L2 6" />
		</>
	),
	clock: (
		<>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 6v6l4 2" />
		</>
	),
	shield: (
		<>
			<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
			<path d="m9 12 2 2 4-4" />
		</>
	),
}

function ContactIcon({ name }) {
	return (
		<svg
			className="contact-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			{iconPaths[name]}
		</svg>
	)
}

function Contacts() {
	const [submitStatus, setSubmitStatus] = useState("idle")

	async function handleContactSubmit(event) {
	event.preventDefault()

		const form = event.currentTarget
		const { serviceId, templateId, publicKey } = emailConfig

		if (!serviceId || !templateId || !publicKey) {
			setSubmitStatus("configuration-error")
			return
		}

		setSubmitStatus("sending")

		try {
			await emailjs.sendForm(serviceId, templateId, form, { publicKey })
			form.reset()
			setSubmitStatus("success")
		} catch {
			setSubmitStatus("error")
		}
	}

	return (
		<section id="contact" className="contact-section page-snap-section" aria-label="Contacto">
			<SectionContainer className="contact-layout">
				<div className="row g-4 align-items-center">
				<div className="col-12 col-lg-5">
					<div className="contact-details">
						<a className="contact-detail" href="tel:+541145678900">
							<ContactIcon name="phone" />
							<span>
								<span className="contact-detail-label">Teléfono comercial</span>
								<span className="contact-detail-value">{ContactInfo.phoneNumber}</span>
							</span>
						</a>
						<a className="contact-detail" href={`mailto:${ContactInfo.email}`}>
							<ContactIcon name="email" />
							<span>
								<span className="contact-detail-label">Correo electrónico</span>
								<span className="contact-detail-value">{ContactInfo.email}</span>
							</span>
						</a>
						<div className="contact-detail">
							<ContactIcon name="clock" />
							<span>
								<span className="contact-detail-label">Horario de atención</span>
								<span className="contact-detail-value">{ContactInfo.horario}</span>
							</span>
						</div>
						<div className="contact-certification">
							<ContactIcon name="shield" />
							<p className="mb-0">Procesos de cotización y fabricación bajo certificación ISO 9001.</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-lg-7">
					<form className="contact-form" onSubmit={handleContactSubmit}>
						<h2 className="h4 fw-semibold mb-1">Enviar Mensaje</h2>
						<p className="contact-form-note mb-3">Todos los campos son obligatorios.</p>

						<div className="mb-2">
							<label className="form-label contact-label" htmlFor="contact-name">Nombre completo</label>
							<input className="form-control contact-input" id="contact-name" name="name" type="text" placeholder="Ej. Juan Pérez" autoComplete="name" required />
						</div>

						<div className="mb-2">
							<label className="form-label contact-label" htmlFor="contact-email">Correo electrónico</label>
							<input className="form-control contact-input" id="contact-email" name="email" type="email" placeholder="juan.perez@empresa.com" autoComplete="email" required />
						</div>

						<div className="mb-3">
							<label className="form-label contact-label" htmlFor="contact-details">Detalle del requerimiento</label>
							<textarea className="form-control contact-input contact-textarea" id="contact-details" name="message" placeholder="Describa las dimensiones, tolerancias, tipo de material o adjunte detalles del mecanizado/reparación solicitado..." required />
						</div>

						<button className="btn contact-submit w-100" type="submit" disabled={submitStatus === "sending"}>
							{submitStatus === "sending" ? "Enviando..." : "Enviar mensaje"}
							{submitStatus !== "sending" && <span aria-hidden="true">→</span>}
						</button>
						<p className="contact-form-status mb-0" role="status" aria-live="polite">
							{submitStatus === "success" && "Mensaje enviado correctamente."}
							{submitStatus === "error" && "No se pudo enviar el mensaje. Inténtelo nuevamente."}
							{submitStatus === "configuration-error" && "El formulario todavía no está configurado para enviar mensajes."}
						</p>
					</form>
				</div>
				</div>
			</SectionContainer>
		</section>
	)
}

export default Contacts
