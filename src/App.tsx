// @ts-ignore
import React from "react";
import { RocketIcon, BarChart3, Users } from "lucide-react";
import "./styles.css";

export default function LandingPage() {
    return (
        <div className="container">
            <h1>FightStats</h1>
            <p>Datenbasierte Analyse im Grappling – BJJ, MMA, Ringen & mehr.</p>

            <div className="grid">
                <div className="card">
                    <RocketIcon className="icon" color="#60a5fa" />
                    <h3>Schneller Fortschritt</h3>
                    <p>Nutze detaillierte Match-Analysen, um deine Skills gezielt zu verbessern.</p>
                </div>

                <div className="card">
                    <BarChart3 className="icon" color="#34d399" />
                    <h3>Kampfdaten verstehen</h3>
                    <p>Statistiken zu Takedowns, Submissions, Guard Work & mehr – einfach visualisiert.</p>
                </div>

                <div className="card">
                    <Users className="icon" color="#c084fc" />
                    <h3>Für Athleten & Teams</h3>
                    <p>Ob Einsteiger oder Coach – FightStats bringt datengetriebenes Training in dein Gym.</p>
                </div>
            </div>

            <button className="button">Frühzugang sichern</button>
        </div>
    );
}
