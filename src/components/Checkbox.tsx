import { createEffect, createSignal, For } from "solid-js";

import Item from "../types/Item";

import "./Checkbox.sass";

type CheckBoxProp = {
    item: Item
}

const DUST_COUNT = 6;

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
                <For each={Array.from(Array(DUST_COUNT).keys())}>
                    {(i) =>
                        <div class={`item__dust item__dust--no-${i}`}></div>
                    }
                </For>
                <div class={`item__checkbox item__checkbox--dash ${isDone() ? 'item__checkbox--is-checked' : ''}`}></div>
                <div class={`item__checkbox item__checkbox--check ${isDone() ? 'item__checkbox--is-checked' : ''}`}></div>
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