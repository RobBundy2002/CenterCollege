import React, { useState } from "react";
import "../StyleSheets/ReadingPlan.css";
import BackButton from "../Miscellaneous/BackButton";
import Footer from "../Miscellaneous/Footer";

const ReadingPlan = () => {

    // Update later with actual reading plan
    const readingPlan = [
        { date: "2025-03-01", book: "Genesis", chapter: "1", description: "Start of Genesis" },
        { date: "2025-03-02", book: "Genesis", chapter: "2", description: "Genesis Day 2" },
        { date: "2025-03-03", book: "Genesis", chapter: "3", description: "Genesis Day 3" },
        { date: "2025-03-04", book: "Genesis", chapter: "4", description: "Genesis Day 4" },
        { date: "2025-03-05", book: "Genesis", chapter: "5", description: "Genesis Day 5" },
        { date: "2025-03-06", book: "Exodus", chapter: "1", description: "Start of Exodus" },
        { date: "2025-03-07", book: "Exodus", chapter: "2", description: "Exodus Day 2" },
        { date: "2025-03-08", book: "Exodus", chapter: "3", description: "Exodus Day 3" },
    ];

    const [completed] = useState([]);

    const handleMilestoneClick = (book, chapter) => {
        const link = `https://www.esv.org/${book}+${chapter}/`;
        window.open(link, "_blank");
    };


    return (
        <div className="back-container">
            <div className="reading-plan-container">
                <h1>Reading Plan</h1>
                <div className="reading-plan">
                    {readingPlan.map((item, index) => (
                        <div
                            key={index}
                            className={`reading-plan-card ${completed.includes(index) ? "completed" : ""}`}
                            data-title={item.description}
                            onClick={() => {
                                handleMilestoneClick(item.book, item.chapter);
                            }}
                        >
                            <span>{item.book} {item.chapter}</span>
                        </div>
                    ))}
                </div>
            </div>
            <BackButton customClass="rp-back-button"/>
            <div className="footer-container-rp">
                <Footer/>
            </div>
        </div>
    );
};
export default ReadingPlan;