import { clsName } from "../util";
import { COMPS_NAME } from "../util/constant";
export default {
    name: COMPS_NAME.VE_TABLE_BODY_TR,
    props: {
        colgroups: {
            type: Array,
            required: true,
        },
    },
    computed: {
        // tr class
        trClass() {
            let result = null;

            result = {
                [clsName("body-tr")]: true,
            };

            return result;
        },
    },

    render() {
        const { colgroups } = this;

        const props = {
            class: this.trClass,
        };

        return (
            <tr {...props}>
                <td colSpan={colgroups.length}></td>
            </tr>
        );
    },
};
