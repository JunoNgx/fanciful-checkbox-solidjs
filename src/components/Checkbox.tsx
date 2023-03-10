import Item from "../types/Item";

import "./Checkbox.css";

type CheckBoxProp = {
    item: Item
}

function Checkbox(props: CheckBoxProp) {
    return <ul>
        <li>
            <label>
                <input type="checkbox" checked={props.item.isDone}></input>
                <span class="checkbox"></span>
                {props.item.content}
            </label>
        </li>
    </ul>
}

export default Checkbox;