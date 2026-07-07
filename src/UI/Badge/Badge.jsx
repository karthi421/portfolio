"use client";

import "./Badge.css";

export default function Badge({
  text,
  icon,
  color = "#38BDF8",
}) {
  return (
    <div
      className="badge"
      style={{
        "--badge-color": color,
      }}
    >
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}

      <span className="badge-text">
        {text}
      </span>
    </div>
  );
}