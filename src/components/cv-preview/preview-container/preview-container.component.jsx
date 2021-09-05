import React from "react";
import "./preview-container.styles.scss";

import PreviewBody from "../preview-body/preview-body.component";
import PreviewHeader from "../preview-header/preview-header.component";
import PreviewSidebar from "../preview-sidebar/preview-sidebar.component";

const PreviewContainer = () => (
  <div className="col-12 col-xl-5 cv-preview mx-2 mt-4 mt-lg-0">
    <div className="row">
      <PreviewHeader />
    </div>
    <div className="row content">
      <PreviewBody />
      <PreviewSidebar />
    </div>
  </div>
);

export default PreviewContainer;
