type MediaPlaceholderProps = {
  label: string;
  index?: string;
  className?: string;
  tall?: boolean;
  src?: string;
  objectPosition?: string;
  priority?: boolean;
};

export function MediaPlaceholder({
  label,
  index,
  className = "",
  tall = false,
  src,
  objectPosition = "center",
  priority = false,
}: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder ${src ? "media-photo" : ""} ${tall ? "media-tall" : ""} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={label}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{ objectPosition }}
        />
      ) : (
        <>
          <span className="media-glow" aria-hidden="true"></span>
          <span className="media-scan" aria-hidden="true"></span>
          <span className="media-label">
            <small>Vizual za zamjenu</small>
            {label}
          </span>
        </>
      )}
      {index && <span className="media-index">{index}</span>}
    </div>
  );
}
