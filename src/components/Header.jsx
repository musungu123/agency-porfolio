function Header() {
    return (
        <header className="border-b border-line px-[clamp(1rem,5vw,4rem)] pb-16 pt-6">
      <nav className="mb-16 flex items-center gap-6 max-sm:mb-10" aria-label="Main">
        <span className="mr-auto font-display text-xl font-extrabold">Agency Studio</span>
        <a href="#work">Work</a>
        <a href="#add">Add project</a>
      </nav>
      <h1 className="mb-2 max-w-[18ch] font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[1.15]">
        We make brands, products and stories people remember.
      </h1>
      <p>An independent creative agency. Browse recent projects below.</p>
    </header>
    )
}

export default Header;