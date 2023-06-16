import style from "./CreateForm.module.css";

export default function CreateForm() {
    return (
        <form className={style.containerForm}>
            <div className={style.dog}>
                <div className={style.dogInfo}>
                    <label htmlFor="name">
                        <h3>Name</h3>
                    </label>
                    <input
                        className={style.inputName}
                        name="name"
                        type="text"
                    />
                    <hr />
                    <div>
                        <h3>Height</h3>
                        <div className={style.inputBars}>
                            <div>
                                <label htmlFor="min_height">Min:</label>
                                <input name="min_height" type="number" />
                            </div>
                            <div>
                                <label htmlFor="max_height">Min:</label>
                                <input name="max_height" type="number" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>Weight</h3>
                        <div className={style.inputBars}>
                            <div>
                                <label htmlFor="min_weight">Min:</label>
                                <input name="min_weight" type="number" />
                            </div>
                            <div>
                                <label htmlFor="max_weight">Min:</label>
                                <input name="max_weight" type="number" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>Life span</h3>
                        <div className={style.inputBars}>
                            <div>
                                <label htmlFor="min_life_span">Min:</label>
                                <input name="min_life_span" type="number" />
                            </div>
                            <div>
                                <label htmlFor="max_life_span">Min:</label>
                                <input name="max_life_span" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.temperaments}>
                    <h3>Temperaments</h3>
                    <div>
                        <label htmlFor="temperaments">Temperaments:</label>
                        <input name="temperaments" type="checkbox" />
                    </div>
                    <div></div>
                </div>
            </div>
            <button className={style.submitbutton} type="submit">
                <h1>Create dog</h1>
            </button>
        </form>
    );
}
