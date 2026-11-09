import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectList from "./components/ProjectList.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import { seedProjects } from "./data/projects.js";

// App owns `projects` and `query` because SearchBar, ProjectList and ProjectForm
// all depend on them (state lives in the nearest common parent).
 function App() {
  const [projects, setProjects] = useLocalStorage("portfolio-projects", seedProjects);
  const [query, setQuery] = useState("");
  const [category, setcategory] = useState("All");

  // Case-insensitive match on title, category and description.
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) =>
      [p.title, p.category, p.description].some((f) => f.toLowerCase().includes(q))
    );
  }, [projects, query]);

  const addProject = (project) =>
    setProjects((prev) => [{ ...project, id: Date.now() }, ...prev]);

  return (
    <>
      <Header />
      <main>
        <section id="work" className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,4rem)] py-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold">Selected work</h2>
            <SearchBar query={query} onChange={setQuery} />
          </div>
          <ProjectList projects={visible} />
        </section>
        <section id="add" className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,4rem)] py-12">
          <h2 className="mb-4 font-display text-3xl font-semibold">Add a project</h2>
          <ProjectForm onAdd={addProject} />
        </section>
      </main>
      <footer className="border-t border-line p-8 text-center">
        © {new Date().getFullYear()} Studio Portfolio
      </footer>
    </>
  );
}

export default App