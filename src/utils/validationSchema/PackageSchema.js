import * as yup from "yup"
import Translate from "../../hooks/Translate";

const PackageSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required(<Translate validations='validations:required' name='name' />),

    slug: yup
        .string()
        .trim()
        .required(<Translate validations='validations:required' name='name' />),

});

export default PackageSchema;