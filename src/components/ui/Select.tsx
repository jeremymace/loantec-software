"use client";

import { useState, useId } from "react";

type SelectProps = {
  label?: string;
  hint?: string;
  options: (string | { value: string; label: string })[];
  id?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  label,
  hint,
  options = [],
  id,
  style = {},
  name,
  value,
  onChange,
}: SelectProps) {
  const [focus, setFocus] = useState(false);
  const autoId = useId();
  const fieldId = id || autoId;

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
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative", display: "flex" }}>
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            width: "100%",
            background: "var(--white)",
            border: `1.5px solid ${focus ? "var(--blue)" : "var(--border-strong)"}`,
            borderRadius: "var(--radius)",
            boxShadow: focus ? "var(--shadow-focus)" : "none",
            padding: "11px 38px 11px 12px",
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-body)",
            cursor: "pointer",
            outline: "none",
            transition:
              "border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)",
            ...style,
          }}
        >
          {options.map((o) => {
            const val = typeof o === "string" ? o : o.value;
            const lbl = typeof o === "string" ? o : o.label;
            return (
              <option key={val} value={val}>
                {lbl}
              </option>
            );
          })}
        </select>
        <span
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--text-muted)",
            fontSize: 11,
          }}
        >
          &#x25BE;
        </span>
      </div>
      {hint && (
        <span
          style={{
            fontSize: 12,
            color: "var(--text-subtle)",
          }}
        >
          {hint}
        </span>
      )}
    </div>
  );
}
