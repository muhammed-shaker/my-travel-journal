import glob from "../assets/images/glob.svg"

export default function Header(){
    return (
        <header className="header">
            <img src={glob} alt="Glob icon" />
            <h1>my travel journal</h1>
        </header>
    )
}