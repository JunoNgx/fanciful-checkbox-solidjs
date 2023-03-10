import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.smodule.css';

import Checkbox from './components/Checkbox';

const App: Component = () => {

    const [itemList, setItemList] = createSignal([
        { content: "Chicken rice", isDone: false }, 
        { content: "Bah Kut Teh", isDone: false }, 
        { content: "Nasi Biryani", isDone: false }, 
    ]);

    return (
        // <div class={styles.App}>
        //     <header class={styles.header}>
        //         <img src={logo} class={styles.logo} alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             class={styles.link}
        //             href="https://github.com/solidjs/solid"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn Solid
        //         </a>
        //     </header>
        // </div>

        <For each={itemList()}>
            {(item, index) =>
                <div>{item.content}</div>
            }
        </For>
    );
};

export default App;
