import { useState } from "react"
import { FaSave } from 'react-icons/fa';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);

    return(
        <>
            <input 
            required='required'
            type="number"
            class="form-control mr-3"
            id="name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            ></input>
            <FaSave
            onClick={() => props.handleSaveClick(value)}

            ></FaSave>
        </>
    );
};

export default EditBudget;