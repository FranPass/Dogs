import { useState, useEffect } from "react";
import axios from "axios";
import style from "./CreateForm.module.css";
import validation from "./validation";

export default function CreateForm() {
    const [temperaments, setTemperaments] = useState([]);
    const [selectedTemperaments, setSelectedTemperaments] = useState([]);
    const [errors, setErrors] = useState({});
    const [dogData, setDogData] = useState({
        name: '',
        image: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        min_life_span: '',
        max_life_span: '',
        temperaments: []
    })

    const getTemperamentsList = async () => {
        const {data} = await axios.get('http://localhost:3001/temperaments')
        setTemperaments(() => [...data])
    }
    useEffect(() => {
        getTemperamentsList()
    }, [])

    const handleTemperaments = (event) => {
        event.preventDefault();
        setSelectedTemperaments([...selectedTemperaments, {id: Number(event.target.value), name: event.target.name}])
    }

    const eraseTemperament = (event) => {
        event.preventDefault();
        setSelectedTemperaments(selectedTemperaments.filter(e => e.id !== Number(event.target.value)))
    }

    const handleChange = (event) => {
        setDogData({
            ...dogData,
            [event.target.name]: event.target.value,
            temperaments:  [...selectedTemperaments]
        })
        setErrors(validation({
            ...dogData,
            [event.target.name]: event.target.value,
            temperaments:  [...selectedTemperaments]
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const URL = 'http://localhost:3001/dogs'
        const {
            name, 
            image,
            min_height, 
            max_height, 
            min_weight, 
            max_weight,
            min_life_span,
            max_life_span,
            temperaments} = dogData;
        if (!Object.keys(errors).length) {
            const newDogData = {
                name, 
                image,
                height: `${min_height} - ${max_height}`, 
                weight: `${min_weight} - ${max_weight}`, 
                life_span: `${min_life_span} - ${max_life_span}`, 
                temperament: temperaments
            }
            
            const {data} = await axios.post(URL, newDogData);
            setDogData({
                name: '',
                image: '',
                min_height: '',
                max_height: '',
                min_weight: '',
                max_weight: '',
                min_life_span: '',
                max_life_span: '',
                temperaments: []
            })
            return console.log(data.success)
        }
        return console.log('Complete all the fields correctly');
    }
    
    return (
        <form className={style.containerForm}>
            <div className={style.dog}>
                <div className={style.dogInfo}>
                    <label htmlFor="name">
                        <h3>Name</h3>
                    </label>
                    <input
                        className={style.inputName}
                        value={dogData.name}
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="image">
                        <h3>Image</h3>
                    </label>
                    <input
                        className={style.inputName}
                        value={dogData.image}
                        name="image"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert url of image"
                    />
                    
                    {["Height", "Weight", "Life Span"].map((e, index) => {
                        return (
                            <div key={index}>
                                <h3>{e}</h3>
                                <div className={style.inputNums}>
                                    <div>
                                        <label htmlFor={`min_${e.toLowerCase().replace(" ", "_")}`}> Min: </label>
                                        <input 
                                            value={dogData[`min_${e.toLowerCase().replace(" ", "_")}`]} 
                                            name={`min_${e.toLowerCase().replace(" ", "_")}`} 
                                            type="number" 
                                            onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label htmlFor={`max_${e.toLowerCase().replace(" ", "_")}`}> Max: </label>
                                        <input 
                                            value={dogData[`max_${e.toLowerCase().replace(" ", "_")}`]}  
                                            name={`max_${e.toLowerCase().replace(" ", "_")}`} 
                                            type="number" 
                                            onChange={handleChange}/>
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>
                <div className={style.temperaments}>
                    <h3>Temperaments</h3>
                        <div className={style.temperamentsList}>
                            {temperaments.map((e) => {
                                return (
                                    <button 
                                        className={style.temp} 
                                        key={e.id} value={e.id} 
                                        name={e.name} 
                                        onClick={handleTemperaments} 
                                        disabled={selectedTemperaments.find(obj => obj.id === e.id)}>
                                        {e.name}
                                    </button>
                                )
                            })}
                        </div>
                        <div className={style.selectedTemperamentsList}>
                            {selectedTemperaments.map((e) => {
                                return (
                                    <button 
                                        className={style.temp} 
                                        key={e.id} 
                                        value={e.id} 
                                        onClick={eraseTemperament}>
                                        {e.name}
                                    </button>
                                )
                            })}
                        </div>
                        {errors.e11 ? <p>{errors.e11}</p> : <p>{errors.e12}</p>}
                </div>
            </div>
            <button className={style.submitbutton} type="submit" onClick={handleSubmit}>
                <h1>Create dog</h1>
            </button>
        </form>
    );
}
