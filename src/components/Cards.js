import React from 'react';
import ReadMore from './ReadMore';

export default function Cards(props) {
    return (
        <div className='card'>
            <section className='column-left'>
                <img className="card-img" src={`/images/${props.item.coverImg}`} alt="images" />
            </section>
            <section className='column-right'>
                <span className='material-symbols-outlined'>location_on</span>
                <span className="card-country">{props.item.country} </span>
                <a href={props.item.googleMapLink}>View on Google Maps</a>
                <h3 className="card-country-title">{props.item.title}</h3>
                <h4 className="card-date">{props.item.date}</h4>
                <p>{props.item.description}</p>
                <span>Read more..</span>
            </section>
           
        </div>
    )
}
/*8
     id: 1,
        date: "May 2018",
        title: "Panajachel, Lake Atitlan",
        description: "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers. Strolling the main street, Calle Santander – crammed with travel agencies, handicraft hawkers and rowdy bars, dodging tuk-tuks all the way – you may be forgiven for supposing this paradise lost..",
        coverImg: "atitlan.jpeg",
        location: "Guatemala",
        googleMapLink: "placeholder link",
        */