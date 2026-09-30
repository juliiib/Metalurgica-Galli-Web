import "./whatsApp-nav.css"
import whatsappIcon from "../../assets/icons/whatsapp.svg"

function WhatsAppNav() {
	return (
		<div className="whatsApp-nav" aria-hidden="true">
			<img className="whatsApp-nav-icon" src={whatsappIcon} alt="WhatsApp" />
		</div>
	)
}

export default WhatsAppNav
