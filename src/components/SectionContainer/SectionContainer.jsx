import "./SectionContainer.css";

function SectionContainer({
  as: Element = "div",
  size = "default",
  className = "",
  children,
  ...props
}) {
  const sizeClass = size === "narrow" ? " section-container--narrow" : "";
  const classes = `section-container${sizeClass}${className ? ` ${className}` : ""}`;

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

export default SectionContainer;
