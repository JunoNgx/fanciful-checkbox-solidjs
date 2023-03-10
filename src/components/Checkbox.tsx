import Item from "../types/Item";

import "./Checkbox.sass";

type CheckBoxProp = {
    item: Item
}

function Checkbox(props: CheckBoxProp) {
    return (
        <label class="item">
            <input type="checkbox" checked={props.item.isDone}></input>
            <div class="item__checkbox-container">
                <div class="item__checkbox"></div>
            </div>
            <span class="item__content">{props.item.content}</span>
        </label>
    )
}

export default Checkbox;