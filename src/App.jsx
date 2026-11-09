import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectList from "./components/ProjectList.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import { seedProjects } from "./data/projects.js";

// App owns `projects` and `query` because SearchBar, ProjectList and ProjectForm
// all depend on them (state lives in the nearest common parent).
 function App() {
  const [projects, setProjects] = useState(seedProjects);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new set(projects.map((p) => p.category))];

  const q = query.trim().toLowerCase();
  const visible = projects.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesQuery =
      !q || [p.title, p.category, p.description].some((f) => f.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  const addProject = (project) =>
    setProjects((prev) => [{ ...project, id: Date.now() }, ...prev]);

  return (
    <>
      <Header />
      <main>
        <section id="work" className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,4rem)] py-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold">Selected work</h2>
            <div className="flex w-full flex-wrap gap-3 sm:w-auto">
              <label>
                <span className="sr-only">Filter by category</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-md border border-line bg-card px-3 py-2.5"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </label>
              <SearchBar query={query} onChange={setQuery} />
            </div>
          </div>
          <p className="mb-4 text-sm">
            Showing {visible.length} of {projects.length} projects
          </p>
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