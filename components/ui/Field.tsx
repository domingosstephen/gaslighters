import { forwardRef } from "react";

type FieldProps = {
  label: string;
  name: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  as?: "input" | "textarea";
};

export const Field = forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  function Field({ label, name, error, className = "", as = "input", ...rest }, ref) {
    const inputClasses = `w-full h-12 border bg-paper px-4 text-body text-ink outline-none transition-colors
      ${error ? "border-ember" : "border-ink"}
      focus:ring-2 focus:ring-ember focus:ring-offset-0`;

    return (
      <div className={className}>
        <label htmlFor={name} className="text-label mb-2 block text-steel">
          {label}
        </label>
        {as === "textarea" ? (
          <textarea
            id={name}
            name={name}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${inputClasses} h-auto min-h-[120px] py-3`}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={name}
            name={name}
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputClasses}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p className="mt-1 text-spec text-small text-ember">{error}</p>
        )}
      </div>
    );
  }
);
