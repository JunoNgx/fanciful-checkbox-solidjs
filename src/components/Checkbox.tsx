import { createEffect, createSignal } from "solid-js";

import Item from "../types/Item";

import "./Checkbox.sass";

type CheckBoxProp = {
    item: Item
}

function Checkbox(props: CheckBoxProp) {
    const [isDone, setIsDone] = createSignal(props.item.isDone)

    // createEffect(()=> {
    //     console.log(isDone())
    // })

    return (
        <label class="item">
            <input
                type="checkbox"
                checked={isDone()}
                onInput={(e) => setIsDone((e.target as HTMLInputElement).checked)}
            ></input>
            <div class="item__checkbox-container">
                <div class={`item__checkbox ${isDone() ? 'item__checkbox--is-checked' : ''}`}></div>
            </div>
            <span class={`item__content-container ${isDone() ? 'item__content-container--is-checked' : ''}`}>
                <span class={`item__content ${isDone() ? 'item__content--is-checked' : ''}`}>
                    {props.item.content}
                </span>
            </span>
        </label>
    )
}

export default Checkbox;