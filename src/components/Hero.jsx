import './hero.css'

export default function Hero({
  eyebrow,
  title,
  intro,
  tagline,
  primaryButton,
  secondaryButton,
  className,
  text,
  date
}) {
  return(
    <section className={`hero-sec ${className}`}>
      {eyebrow && (
        <h3 className="hero-eyebrow">{eyebrow}</h3>
      )}
      {title && (
        <h1 className="hero-title">{title}</h1>
      )}
      {tagline && (
        <h2 className="hero-tagline">{tagline}</h2>
      )}
      {intro && (
        <p className="hero-intro">{intro}</p>
      )}
      {date && (
        <p className="hero-date">{date}</p>
      )}
      {text && (
        <p className="hero-text">{text}</p>
      )}
      {(primaryButton || secondaryButton) && (
        <div className="hero-buttons">
          {primaryButton && (
            <button>{primaryButton}</button>
          )}

          {secondaryButton && (
            <button>{secondaryButton}</button>
          )}
        </div>
      )}
    </section>
  )
}