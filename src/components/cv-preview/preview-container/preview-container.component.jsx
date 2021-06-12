import React from 'react';
import './preview-container.styles.scss';

import { PreviewBody } from '../preview-body/preview-body.component';
import { PreviewHeader } from '../preview-header/preview-header.component';
import { PreviewSidebar } from '../preview-sidebar/preview-sidebar.component';

export class PreviewContainer extends React.Component {
  render() {
    const { personalInfo, education, experience } = this.props;

    return (
      <div className='col-12 col-xl-5 cv-preview mx-2 mt-4 mt-lg-0'>
        <div className='row'>
          <PreviewHeader
            firstName={personalInfo.firstName}
            lastName={personalInfo.lastName}
            title={personalInfo.title}
          />
        </div>
        <div className='row content'>
          <PreviewBody
            education={education}
            experience={experience}
            description={personalInfo.description}
          />
          <PreviewSidebar
            address={personalInfo.address}
            phoneNumber={personalInfo.phoneNumber}
            email={personalInfo.email}
          />
        </div>
      </div>
    );
  }
}
