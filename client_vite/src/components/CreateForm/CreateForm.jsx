import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllTemperaments } from "../../redux/actions";
import style from "./CreateForm.module.css";
import validation from "./validation";

export default function CreateForm() {
    const dispatch = useDispatch()
    const allTemperaments = useSelector((state) => state.allTemperaments)
    useEffect(() => {
        dispatch(setAllTemperaments());
    }, [dispatch]);

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
        if(!temperaments.length) return window.alert('Complete all the fields correctly');
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
            return window.alert(data.success)
        }
        return window.alert('Complete all the fields correctly');
    }
    
    return (
        <form className={style.containerForm}>
            <div className={style.dog}>
                <div className={style.dogInfo}>
                    <label htmlFor="name"> <h3>Breed Name</h3> </label>
                    <input
                        className={style.inputName}
                        value={dogData.name}
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="image"> <h3>Image</h3> </label>
                    <input
                        className={style.inputName}
                        value={dogData.image}
                        name="image"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert url of image..."
                    />
                    {["Height (cm)", "Weight (kg)", "Life Span (years)"].map((e, index) => {
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
                </div>
            </div>
            <button className={style.submitbutton} type="submit" onClick={handleSubmit}>
                <h1>Create your own dog!</h1>
            </button>
        </form>
    );
}
