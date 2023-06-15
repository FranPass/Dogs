import style from './CreateForm.module.css'

export default function CreateForm () {
    return (
        <form className={style.containerForm}>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" />

            <label htmlFor="height">Height:</label>
            <input name="height" type="text" />

            <label htmlFor="weight">Weight:</label>
            <input name="weight" type="text" />

            <label htmlFor="life_span">Life span:</label>
            <input name="life_span" type="text" />

            <label htmlFor="temperaments">Temperaments:</label>
            <input name="temperaments" type="text" />
        </form>
    )
}