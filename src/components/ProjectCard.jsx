function ProjectCard({ project }) {
    const { title, category, description, image, color } = project;

    return (
        <article className="h-full overflow-hidden rounded-lg border border-line bg-card">
            <div
                className="aspect-[4/3]"
                style={{ backgroundImage: image ? `url("${image}")` : undefined, backgroundColor: color }}
                role="img"
                aria-label={`${title} cover`}
            />
            <div className="p-4">
                <p className="text-sm font-medium text-accent">{category}</p>
                <h3>{title}</h3>
                <p className="mt-1">{description}</p>
            </div>
        </article>
    )
}

export default ProjectCard;