"use client";

import { useCallback, useState } from "react";

type CopyableCodeProps = {
  command: string;
  label?: string;
  className?: string;
};

export default function CopyableCode({
  command,
  label,
  className,
}: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // noop
    }
  }, [command]);

  return (
    <div
      className={[
        "relative rounded-lg border-2 border-black bg-neutral-100 p-3 shadow-[4px_4px_0_0_#000]",
        className || "",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-3 py-1.5 font-semibold shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
        aria-label="Copy to clipboard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125H5.625A1.125 1.125 0 0 1 4.5 20.625V9.375c0-.621.504-1.125 1.125-1.125H9.75m6 9V7.875c0-.621-.504-1.125-1.125-1.125H9.75m6 10.5c0 .621-.504 1.125-1.125 1.125H9.75m0-12 6 6m-6-6v4.875c0 .621.504 1.125 1.125 1.125H15.75" />
        </svg>
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
      <pre className="m-0 whitespace-pre overflow-x-auto pr-28">
        <code>{label ? `${label}\n${command}` : command}</code>
      </pre>
    </div>
  );
}
