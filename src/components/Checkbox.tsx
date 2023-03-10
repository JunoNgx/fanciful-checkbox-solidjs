import "./Checkbox.css";

type CheckBoxProp = {
    content: string
}

function Checkbox(props: CheckBoxProp) {
    return <ul>
        <li>{props.content}</li>
    </ul>
}

export default Checkbox;