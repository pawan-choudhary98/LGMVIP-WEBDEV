const Loader = ({ load }) => {
    return (
        (load) ?
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : ""
    )
}
export default Loader;