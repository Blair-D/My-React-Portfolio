import React from 'react';
import resume from './resume.pdf';

export default function myResume() {
    const resumeFileName = 'Dowling_Blair_Resume.pdf';

    return (
        <div className="card">
            <h1>
                To download my resume, please click <a className="resumeLink" href={resume} download={resumeFileName}>HERE</a>.
            </h1>
        </div>
    );
}
