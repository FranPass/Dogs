import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "./CreateForm.module.css";
import validation from "./validation";
import inputValues from './inputValues'

export default function CreateForm() {
    const allTemperaments = useSelector((state) => state.allTemperaments)
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

    const handleTemperaments = (event) => {
        event.preventDefault();
        const temp = {id: Number(event.target.value), name: event.target.name}
        setErrors(validation({
            ...dogData,
            temperaments:  [...dogData.temperaments, temp]
        }));
        setDogData({
            ...dogData,
            temperaments:  [...dogData.temperaments, temp]
        });
    }
    const eraseTemperament = (event) => {
        event.preventDefault();
        const newTemperaments = dogData.temperaments.filter(e => e.id !== Number(event.target.value))
        setErrors(validation({
            ...dogData,
            temperaments:  [...newTemperaments]
        }));
        setDogData({
            ...dogData,
            temperaments:  [...newTemperaments]
        });
    }
    const handleChange = (event) => {
        setDogData({
            ...dogData,
            [event.target.name]: event.target.value,
        })
        setErrors(validation({
            ...dogData,
            [event.target.name]: event.target.value,
        }));
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const URL = 'http://localhost:3001/dogs'
        if(!dogData.temperaments.length) return window.alert('Complete all the fields correctly');
        if (!Object.keys(errors).length) {
            const {data} = await axios.post(URL, dogData);
            if (!data.created) return window.alert(data.successResponse)
            setDogData(data.dogDataEmpty)
            return window.alert(data.successResponse)
        }
        return window.alert('Complete all the fields correctly');
    }
    
    return (
        <form className={style.containerForm}>
            <div className={style.dog}>
                <div className={style.dogInfo}>
                    <label htmlFor="name"> <h3>Breed Name</h3> 
                    <input
                        className={style.inputName}
                        value={dogData.name}
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                    {errors.name 
                    ? <p className={style.errors}>{errors.name}</p> 
                    : ''}
                    </label>
                    <label htmlFor="image"> <h3>Image</h3> 
                    <input
                        className={style.inputName}
                        value={dogData.image}
                        name="image"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert url of image..."
                    />
                    {errors.image 
                        ? <p className={style.errors}>{errors.image}</p> 
                        : ''}
                    </label>
                    {inputValues('Height', 'cm', style, dogData, handleChange, errors)}
                    {inputValues('Weight', 'kg', style, dogData, handleChange, errors)}
                    {inputValues('Life span', 'years', style, dogData, handleChange, errors)}
                </div>
                <div className={style.temperaments}>
                    <div className={style.titulo}>
                    <h3>Temperaments </h3>
                    </div>
                    <div className={style.temperamentsList}>
                        {allTemperaments.map((e) => {
                            return (
                                <button 
                                    className={style.temp} 
                                    key={e.id} value={e.id} 
                                    name={e.name} 
                                    onClick={handleTemperaments} 
                                    disabled={dogData.temperaments.find(obj => obj.id === e.id)}
                                    >
                                    {e.name}
                                </button>
                            )
                        })}
                    </div>
                    <div className={style.selectedTemperamentsList}>
                        {dogData.temperaments.map((e) => {
                            return (
                                <button 
                                    className={style.temp} 
                                    key={e.id} 
                                    value={e.id} 
                                    onClick={eraseTemperament}
                                    >
                                    {e.name}
                                </button>
                            )
                        })}
                    </div>
                    <p className={style.errors}>{errors.temperaments}</p>
                    <button className={style.submitbutton} type="submit" onClick={handleSubmit}>
                        <h1>Create your own dog!</h1>
                    </button>
                </div>
            </div>
        </form>
    );
}
