import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';

import Checkbox from './components/Checkbox';

const App: Component = () => {

    const [itemList, setItemList] = createSignal([
        { content: "Chicken rice", isDone: false }, 
        { content: "Bah Kut Teh", isDone: false }, 
        { content: "Nasi Biryani", isDone: false }, 
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
