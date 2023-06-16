import { Form } from "react-router-dom";
import "../css/team.css";

export default function Contact() {
    const nl = [
        {
            name: "OriginalFinn",
            avatar: "https://unsplash.it/200/200",
            twitter: "your_handle",
            notes: "Leitung",
            favorite: true,
        },
        {
            name: "Dios_De_Muerte",
            avatar: "https://unsplash.it/200/200",
            twitter: "williams",
            notes: "Leitung",
            favorite: false,
        },
        {
            name: "TwoReaperz",
            avatar: "https://unsplash.it/200/200",
            twitter: "your_handle",
            notes: "Leitung",
            favorite: true,
        },
    ];

    const gta = [
        {
            name: "Dios_De_Muerte",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Projekt Leitung",
            favorite: true,
        },
        {
            name: "Keelly",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Managment",
            favorite: true,
        },
        {
            name: "xImToR3X",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Head of Development",
            favorite: true,
        },
        {
            name: "TwoReaperz",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Development",
            favorite: true,
        },
        {
            name: "KoksAgent",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Development",
            favorite: true,
        },
    ];

    const mc = [
        {
            name: "Kimi",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Projekt Leitung",
            favorite: true,
        },
        {
            name: "rapan207",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Supporter",
            favorite: true,
        },
        {
            name: "Giu",
            avatar: "https://unsplash.it/200/200",
            twitter: "martin",
            notes: "Supporter",
            favorite: true,
        },
    ];

    return (
        <div id="contact">
            <h1>Netzwerk Team</h1>
            <div id="nl">
                {nl.map((contact) => (
                    <div key={contact.name}>
                        <div className="box" style={{ "--i": 0 }}>
                            <i></i>
                            <div className="content">
                                <img src={contact.avatar} />
                                <h2>{contact.name}</h2>
                                {contact.notes}
                            </div>
                        </div>
                        <div></div>
                    </div>
                ))}
            </div>
            <h1>GTA Team</h1>
            <div id="gta">
                {gta.map((contact) => (
                    <div key={contact.name}>
                        <div className="box" style={{ "--i": 1 }}>
                            <i></i>
                            <div className="content">
                                <img src={contact.avatar} />
                                <h2>{contact.name}</h2>
                                {contact.notes}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1>MC Team</h1>
            <div id="mc">
                {mc.map((contact) => (
                    <div key={contact.name}>
                        <div className="box" style={{ "--i": 0 }}>
                            <i></i>
                            <div className="content">
                                <img src={contact.avatar} />
                                <h2>{contact.name}</h2>
                                {contact.notes}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
