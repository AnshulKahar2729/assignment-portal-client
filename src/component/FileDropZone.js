import React, { useState } from 'react';

const FileDropZone = () => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };

  return (
    <div
      className={`zone ${isDraggedOver ? 'hover' : ''} bg-white border-dashed text-white h-[300px] w-[300px] rounded-lg shadow-2xl `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div id="dropZ" className="flex flex-col items-center justify-center h-full gap-2">
        <i className="fa fa-cloud-upload text-5xl"></i>
        <div className="">Drag and drop your file here</div>
        <span className="mb-3">OR</span>
        <div className="selectFile">
          <label
            htmlFor="file"
            className="file-label bg-white text-blue-600 py-2 px-4 rounded cursor-pointer"
          >
            Select file
          </label>
          <input type="file" name="files[]" id="file" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default FileDropZone;
