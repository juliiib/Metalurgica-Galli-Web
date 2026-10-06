function SectionHeader({ eyebrow, title, id, className = "" }) {
	return (
		<header className={className}>
			{eyebrow && <p className="text-primary mb-2">{eyebrow}</p>}
			<h2 className="h2 fw-semibold text-black mb-0" id={id}>
				{title}
			</h2>
		</header>
	)
}

export default SectionHeader