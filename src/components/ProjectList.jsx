import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    if (projects.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-line p-8">
        No projects match your search. Try a different word or add a new project below.
      </p>
    );
  }
   return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.id}>
            <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;