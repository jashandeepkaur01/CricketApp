import './style.css'
function Button(props) {
    return (
        <button id="customBtn" onClick={props.onClick}>{props.children}</button>
    )
}

export default Button
