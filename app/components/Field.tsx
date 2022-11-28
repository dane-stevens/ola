export function Field({
  type = "text",
  name,
  label,
  placeholder,
  options,
  selected,
  required,
}: {
  type?: "text" | "checkbox" | "select" | "date";
  name: string;
  label: string;
  placeholder?: string;
}) {
  if (type === "select") {
    return (
      <div>
        <label>{label}: </label>
        <select name={name}>
          <option value="">Please select an option:</option>
          {options?.map((option, i) => {
            const [value, label] = option;
            return (
              <option key={i} value={value} selected={value === selected}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div>
        <label>{label} </label>
        <input type={type} name={name} placeholder={placeholder} value="on" />
      </div>
    );
  }

  if (type === "date") {
    return (
      <div>
        <label>{label}: </label>
        <input type={type} name={name} />
      </div>
    );
  }

  return (
    <div>
      <label>{label}: </label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
