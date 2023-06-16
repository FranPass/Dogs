import style from "./CreateForm.module.css";

export default function CreateForm() {
    const a = ["Height", "Weight", "Life Span"];

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
                    {a.map((e, index) => {
                        return (
                            <div key={index}>
                                <h3>{e}</h3>
                                <div className={style.inputBars}>
                                    <div>
                                        <label htmlFor={`min_${e.toLowerCase().replace(" ", "_")}`}>
                                            Min:
                                        </label>
                                        <input
                                            name={`min_${e.toLowerCase().replace(" ", "_")}`}
                                            type="number"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`max${e.toLowerCase().replace(" ", "_")}`}>
                                            Max:
                                        </label>
                                        <input
                                            name={`max${e.toLowerCase().replace(" ", "_")}`}
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
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
