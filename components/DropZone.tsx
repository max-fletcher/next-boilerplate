// components/FileDropzone.tsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type DropZoneProps = {
  onFiles: (files: File[]) => void;
  selectedFiles: File[];
};

export const FileDropzone: React.FC<DropZoneProps> = ({ onFiles, selectedFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFiles(acceptedFiles);
    },
    [onFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'image/*': [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 border-2 border-dashed rounded-md cursor-pointer text-center bg-gray-50 hover:bg-gray-100"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop files here, or click to select files</p>
      )}

      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Selected Files:</h4>
          <ul className="text-sm text-gray-600 mt-2">
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
