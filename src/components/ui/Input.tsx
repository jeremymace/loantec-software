"use client";

import { useState, useId } from "react";

type InputProps = {
  label?: string;
  hint?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Input({
  label,
  hint,
  error,
  type = "text",
  placeholder,
  style = {},
  id,
  name,
  value,
  onChange,
  required,
}: InputProps) {
  const [focus, setFocus] = useState(false);
  const autoId = useId();
  const fieldId = id || autoId;
  const borderColor = error
    ? "var(--red)"
    : focus
      ? "var(--blue)"
      : "var(--border-strong)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        ...style,
      }}
    >
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--text-strong)",
            letterSpacing: "0.01em",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--white)",
          border: `1.5px solid ${borderColor}`,
          borderRadius: "var(--radius)",
          padding: "0 12px",
          boxShadow: focus ? "var(--shadow-focus)" : "none",
          transition:
            "border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)",
        }}
      >
        <input
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-body)",
            padding: "11px 0",
          }}
        />
      </div>
      {error ? (
        <span
          style={{
            fontSize: 12,
            color: "var(--red)",
            fontFamily: "var(--font-body)",
          }}
        >
          {error}
        </span>
      ) : hint ? (
        <span
          style={{
            fontSize: 12,
            color: "var(--text-subtle)",
            fontFamily: "var(--font-body)",
          }}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
