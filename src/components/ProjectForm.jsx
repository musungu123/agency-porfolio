import { useState } from "react";

const empty = { title: "", category: "", description: "", image: "" };
const inputClass = "w-full rounded-md border border-line bg-card px-3 py-2.5";


function ProjectForm({ onAdd }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => setValues((prevValues) => ({ ...prevValues, [event.target.name]: event.target.value }));

  const validate = () => {
    const next = {};
    if (!values.title.trim()) next.title = "Enter a project title.";
    if (!values.category.trim()) next.category = "Enter a category.";
    if (!values.description.trim()) next.description = "Add a short description.";
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return; // stop on validation errors
    onAdd({ ...values, title: values.title.trim()});
    setValues(empty);
  };

  const field = (name, label, Tag = "input") => (
    <div>
      <label htmlFor={name} className="mb-1 block font-medium">{label}</label>
      <Tag
        id={name}
        name={name}
        value={values[name]}
        onChange={handleChange}
        aria-invalid={!!errors[name]}
        rows={Tag === "textarea" ? 3 : undefined}
        className={inputClass}
      />
      {errors[name] && <p className="mt-1 text-sm text-red-600" role="alert">{errors[name]}</p>}
    </div>
  );

  return (
     <form className="grid max-w-xl gap-4" onSubmit={handleSubmit} noValidate>
      {field("title", "Title")}
      {field("category", "Category")}
      {field("description", "Description", "textarea")}
      {field("image", "Image URL")}
      <button type="submit" 
      className="cursor-pointer justify-self-start rounded-md bg-accent px-5 py-2.5 font-medium text-white">
        Add project
      </button>
    </form>
  );
}

export default ProjectForm;