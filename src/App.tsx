import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { RocketIcon, BarChart3, Users } from "lucide-react";

export default function App() {
    const { t, i18n } = useTranslation();

    return (
        <div className="page">
            {/* Language Selector */}
            <div className="language-selector">
                <select
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    style={{marginBottom: "2rem", padding: "0.5rem"}}
                >
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Main Content */}
            <main className="container">
                <h1 className="title">{t("title")}</h1>
                <p className="subtitle">
                    {t("subtitle")}
                </p>

                <div className="cards">
                    <div className="card">
                        <RocketIcon className="icon blue" />
                        <h3>{t("card1Title")}</h3>
                        <p>
                            {t("card1Text")}
                        </p>
                    </div>

                    <div className="card">
                        <BarChart3 className="icon green" />
                        <h3>{t("card2Title")}</h3>
                        <p>
                            {t("card2Text")}
                        </p>
                    </div>

                    <div className="card">
                        <Users className="icon purple" />
                        <h3>{t("card3Title")}</h3>
                        <p>
                            {t("card3Text")}
                        </p>
                    </div>
                </div>

                <button className="cta-button">{t("cta")}</button>
            </main>
        </div>
    );
}
