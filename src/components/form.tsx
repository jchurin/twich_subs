import useNewSubForm from "../hooks/use-new-sub-form"
import { Sub } from "../types"

interface Props {
 onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: Props) => {
    const {inputValues, changeValues, clearForm} = useNewSubForm()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        changeValues(name, value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub({...inputValues, avatar: `https://i.pravatar.cc/150?u=${inputValues.avatar}`})
        handleClear()
    }

    const handleClear = () => {
        clearForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.description} type="text" name="description" placeholder="description" />
                <textarea onChange={handleChange} value={inputValues.avatar} name="avatar" placeholder="avatar" />
                <div className="form-buttons">
                    <button type="button" onClick={handleClear}>Clear the form</button>
                    <button type="submit">Save new Sub!</button>
                </div>
            </form>
        </div>
    )
}

export default Form