import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';

import Checkbox from './components/Checkbox';

const App: Component = () => {

    const [itemList, setItemList] = createSignal([
        { content: "Chicken rice", isDone: true },
        { content: "Bah kut teh", isDone: false },
        { content: "Nasi biryani", isDone: false },
        { content: "Pho", isDone: false },
        { content: "Mango sticky rice", isDone: false },
        { content: "Pad thai", isDone: false },
        { content: "Yukgaejang", isDone: false },
        { content: "Bibimbap", isDone: false },
        { content: "Ramyeon", isDone: false },
        { content: "Tonkotsu ramen", isDone: false },
        { content: "Niu rou mian", isDone: false },
        { content: "Char siew", isDone: false },
    ]);

    return (
        <section class="container">
            <ul>
                <For each={itemList()}>
                    {(item, index) =>
                        <li>
                            <Checkbox item={item}></Checkbox>
                        </li>
                    }
                </For>
            </ul>
        </section>
    );
};

export default App;
