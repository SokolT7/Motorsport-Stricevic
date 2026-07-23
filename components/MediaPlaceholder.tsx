type MediaPlaceholderProps = {
  label: string;
  index?: string;
  className?: string;
  tall?: boolean;
};

export function MediaPlaceholder({ label, index, className = "", tall = false }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder ${tall ? "media-tall" : ""} ${className}`} role="img" aria-label={label}>
      <span className="media-glow" aria-hidden="true"></span>
      <span className="media-scan" aria-hidden="true"></span>
      {index && <span className="media-index">{index}</span>}
      <span className="media-label">
        <small>Vizual za zamjenu</small>
        {label}
      </span>
    </div>
  );
}

