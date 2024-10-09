import { Link } from "./ui/link";

export const Nav = () => {
    const links = [
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Hire Me", href: "#hireme" }
    ];

    return <header className="w-full">
        <nav className="flex justify-between items-end">
            <div className="flex-1">
                <Link className="text-4xl" href="/">Thar Lin</Link>
            </div>

            <ul className="flex-1 flex justify-between gap-5">
                {links.map(({ name, href }) => (
                    <li key={name}><Link href={href} className="text-primary">{name}</Link></li>
                ))}
            </ul>
        </nav>
    </header>
};
