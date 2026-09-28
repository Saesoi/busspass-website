import './AnnouncementCard.css'

export default function AnnouncementCard({
  title,
  date,
  description,
  href
}) {
  return (
    <div className="announcement-card">

      <div className="announcement-icon">
        <span>♙</span>
      </div>

      <div className="announcement-content">

        <div className="announcement-header">
          <h3>{title}</h3>
          <span className="announcement-date">
            {date}
          </span>
        </div>

        <p className="announcement-description">
          {description}
        </p>

        <a
          className="announcement-link"
          href={href}
        >
          View Details
          <span className="announcement-arrow">→</span>
        </a>

      </div>
    </div>
  )
}