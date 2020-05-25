
const CustomField = ({children}) => (
    typeof(children) === 'function' ? children() : children
);

export default CustomField;