"use client";
import { useState } from "react";
export default function DisplayEmploi({
    titre,
    auteur,
    genre,
    annee,
    description,
}) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="m-4">
            <button onClick={() => setIsOpen(!isOpen)}>
                <h1 className="font-semibold">{titre}</h1>
            </button>

            {isOpen && (
                <div>
                    <h1 className="text-red-500">Auteur : {auteur}</h1>
                    <h1>Genre : {genre} </h1>
                    <h1>Annee : {annee}</h1>
                    <p>Description : {description}</p>
                </div>
            )}
        </div>
    );
}
