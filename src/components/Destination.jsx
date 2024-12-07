import mapMarker from "../assets/images/marker.svg";

export default function Destination({img: image, title, country, googleMapsLink: gml, dates, text}){
    return (
        <article className="destination">
            <section className="destination__photo">
                <img 
                    src={image.src}
                    alt={image.alt}
                />
            </section>
            <section className="destination__details">
                <header>
                    <img src={mapMarker} alt="Map marker icon" />
                    <sapn className="destination__details__country">{country}</sapn>
                    <a className="destination__details__google-maps-link" href={gml} target="_blank">View on Google Maps</a>
                </header>
                <h2 className="destination__details__title">{title}</h2>
                <time className="destination__details__date">{dates}</time>
                <p className="destination__details__description">{text}</p>
            </section>
        </article>
    )
}