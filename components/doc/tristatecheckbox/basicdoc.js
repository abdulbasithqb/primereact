import { useState } from 'react';
import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function BasicDoc() {
    const [value, setValue] = useState(null);

    return (
        <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function BasicDoc() {
    const [value, setValue] = useState<any>(null);

    return (
        <TriStateCheckbox value={value} onChange={(e : TriStateCheckboxChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                TriStateCheckbox is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div style={{ marginRight: '0.5rem', lineHeight: '1' }}>
                    <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
                </div>
                <label>{String(value)}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}