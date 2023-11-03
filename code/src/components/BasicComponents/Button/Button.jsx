function Button({ text, outOfStock }) {
    return (
        <>
            <button className={outOfStock ? "button gray" : "button"}>
                {text}
            </button>
        </>
    );
}

export default Button;

// Button.propTypes = {
//   text: PropTypes.string,
//   outOfStock: PropTypes.bool,
// };

// Button.defaultProps = {
//   outOfStock: false,
// };
