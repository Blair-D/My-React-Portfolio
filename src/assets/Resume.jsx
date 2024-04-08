import React from 'react';
import resume from './resume.pdf';

export default function myResume() {
    const resumeFileName = 'Dowling_Blair_Resume.pdf';

    return (
        <div className="card">
            <h1>
                Click <a className="resumeLink" href={resume} download={resumeFileName}>Here</a> From my Resume.
            </h1>
        </div>
    );
}
