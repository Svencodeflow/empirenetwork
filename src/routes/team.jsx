import { Form } from "react-router-dom";
import "../css/team.css";

export default function Contact() {
    const nl = [
        {
            name: "OriginalFinn",
            avatar: "https://cdn.discordapp.com/avatars/392045810399051780/b125b2cec01f25c1c361a06456871dc0.webp?size=128",
            twitter: "your_handle",
            notes: "Leitung",
            favorite: true,
        },
        {
            name: "Dios_De_Muerte",
            avatar: "https://cdn.discordapp.com/avatars/534022113649229843/b958a4fa7895f9783f782a9ca17ab1ad.webp?size=128",
            twitter: "williams",
            notes: "Leitung",
            favorite: false,
        },
        {
            name: "TwoReaperz",
            avatar: "https://pbs.twimg.com/profile_images/1349150089474957313/i-GSsdVr_400x400.jpg",
            twitter: "your_handle",
            notes: "Leitung",
            favorite: true,
        },
    ];

    const gta = [
        {
            name: "Dios_De_Muerte",
            avatar: "https://cdn.discordapp.com/avatars/534022113649229843/b958a4fa7895f9783f782a9ca17ab1ad.webp?size=128",
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
            avatar: "https://c4.wallpaperflare.com/wallpaper/851/501/292/minimalism-programming-code-wallpaper-preview.jpg",
            twitter: "martin",
            notes: "Head of Development",
            favorite: true,
        },
        {
            name: "TwoReaperz",
            avatar: "https://pbs.twimg.com/profile_images/1349150089474957313/i-GSsdVr_400x400.jpg",
            twitter: "martin",
            notes: "Development",
            favorite: true,
        },
        {
            name: "KoksAgent",
            avatar: "https://cdn.discordapp.com/avatars/165071662595702784/84641853fb7ed72e4be0e8b12ea1f3e7.webp?size=128",
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
            name: "OriginalFinn",
            avatar: "https://cdn.discordapp.com/avatars/392045810399051780/b125b2cec01f25c1c361a06456871dc0.webp?size=128",
            twitter: "your_handle",
            notes: "Development",
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
            <h1>
                <span>Network</span> Team
            </h1>
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
            <h1>
                <span2>GTA</span2> Team
            </h1>
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
            <h1>
                <span3>MC</span3> Team
            </h1>
            <div id="mc">
                {mc.map((contact) => (
                    <div key={contact.name}>
                        <div className="box" style={{ "--i": 2 }}>
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
