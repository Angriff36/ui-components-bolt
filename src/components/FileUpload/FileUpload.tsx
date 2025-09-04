import React, { useRef, useState } from 'react';
import { Upload, X, Image, Video, File } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFilesChange?: (files: File[]) => void;
  className?: string;
  variant?: 'default' | 'compact' | 'recipe';
  disabled?: boolean;
  label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept = "image/*,video/*",
  multiple = false,
  maxSize = 10, // 10MB default
  onFilesChange,
  className,
  variant = 'default',
  disabled = false,
  label = "Upload files"
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    let validFiles: File[] = [];
    let errorMessage = '';

    fileArray.forEach(file => {
      // Size check
      if (file.size > maxSize * 1024 * 1024) {
        errorMessage = `File "${file.name}" is too large. Maximum size is ${maxSize}MB.`;
        return;
      }
      validFiles.push(file);
    });

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError('');
    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const openFileDialog = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (file.type.startsWith('video/')) return <Video className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const variantClasses = {
    default: "border-2 border-dashed border-gray-300 rounded-lg p-6",
    compact: "border border-dashed border-gray-300 rounded-md p-4",
    recipe: "border-2 border-dashed border-emerald-300 rounded-lg p-6 bg-emerald-50/30"
  };

  const dropzoneClasses = cn([
    "transition-all duration-200 cursor-pointer",
    "hover:border-emerald-400 hover:bg-emerald-50/50",
    "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
    dragActive ? "border-emerald-500 bg-emerald-50" : "",
    disabled ? "opacity-50 cursor-not-allowed hover:border-gray-300 hover:bg-transparent" : "",
    variantClasses[variant],
    className
  ]);

  return (
    <div className="space-y-4">
      <div
        className={dropzoneClasses}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-label={label}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />
        
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className={cn(
            "w-8 h-8 mb-3 text-gray-400",
            dragActive ? "text-emerald-500" : "",
            variant === 'recipe' ? "text-emerald-500" : ""
          )} />
          <p className="text-sm font-medium text-gray-700">
            {dragActive ? "Drop files here" : label}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {accept.includes('image') && accept.includes('video') ? 
              'Images and videos up to ' : 
              accept.includes('image') ? 'Images up to ' : 'Videos up to '
            }{maxSize}MB
          </p>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            {files.length} file{files.length > 1 ? 's' : ''} selected
          </p>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 p-2 bg-gray-50 rounded-md"
              >
                {getFileIcon(file)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { FileUpload };