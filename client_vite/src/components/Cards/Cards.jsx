/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({dogs}) {
   return (
      <div className={style.divCards}>
            {
                  dogs.map(({id, name, image, temperaments, weight}) =>{
                        return(
                              <Card 
                              key={id}
                              id={id}
                              name={name}
                              image={image}
                              temperaments={temperaments}
                              weight={weight}
                              />
                        )
                  })
            }
      </div>);
}
