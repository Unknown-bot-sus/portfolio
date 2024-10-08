import Link from "next/link";

export const Nav = () => {
    const links = [
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Hire Me", href: "#hireme" }
    ];

    return <header className="w-full">
        <nav className="flex justify-between">
            <Link className="flex-1" href="/">Thar Lin</Link>

            <ul className="flex-1 flex justify-between gap-5">
                {links.map(({ name, href }) => (
                    <li><Link href={href}>{name}</Link></li>
                ))}
            </ul>
        </nav>
    </header>
};
