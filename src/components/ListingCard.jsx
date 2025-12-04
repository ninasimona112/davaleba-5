import TagList from "./TagList.jsx";

export default function ListingCard({ job }) {
  const logoSrc = job.logo ? job.logo : "/images/company-placeholder.svg";

  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={`listing-card ${job.featured ? "listing-card--featured" : ""}`}
    >
      <div className="img-container">
        <img
          className="company-img"
          src={logoSrc}
          alt={`${job.company} logo`}
        />
      </div>

      <div className="details-container">
        <div className="company-row">
          <h2 className="company-name">{job.company}</h2>

          {job.new && <span className="badge badge-new">NEW!</span>}
          {job.featured && (
            <span className="badge badge-featured">FEATURED</span>
          )}
        </div>

        <h3 className="listing-title">{job.position}</h3>

        <ul className="listing-details">
          <li>{job.postedAt}</li>
          <span className="bullet-symbol">•</span>
          <li>{job.contract}</li>
          <span className="bullet-symbol">•</span>
          <li>{job.location}</li>
        </ul>
      </div>

      {/* ტეგები მარჯვნივ */}
      <TagList tags={tags} />
    </div>
  );
}
