import { IoIosMenu } from "react-icons/io";
export default function NavBar({ setPage }) {
    return (
        <nav className="flex justify-between items-center h-20 text-white px-4">
            <IoIosMenu className="text-2xl block sm:hidden" />
            <ul className="flex space-x-4 hidden sm:flex">
                <li>
                    <button
                        onClick={() => setPage("Accueil")}
                        className="cursor-pointer"
                    >
                        Accueil
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("Entreprises")}
                        className="cursor-pointer"
                    >
                        Entreprises
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPage("Emploi");
                        }}
                        className="cursor-pointer"
                    >
                  Emploi
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("A propos")}
                        className="cursor-pointer"
                    >
                        About"
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("Contact")}
                        className="cursor-pointer"
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}
