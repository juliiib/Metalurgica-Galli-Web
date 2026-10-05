import "./whatsApp-nav.css"
import { ContactInfo } from "../../data/CompanyInformation.js"
import whatsappIcon from "../../assets/icons/whatsapp.svg"

function WhatsAppNav() {
	const phoneNumber = ContactInfo.phoneNumber
	const message = encodeURIComponent(ContactInfo.whatsAppMessage)

	if (!phoneNumber) return null

	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

	return (
		<a
			className="whatsApp-nav"
			href={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Contactar por WhatsApp"
		>
			<img className="whatsApp-nav-icon" src={whatsappIcon} alt="" />
		</a>
	)
}

export default WhatsAppNav
