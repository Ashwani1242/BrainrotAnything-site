import React, { useState, useRef } from 'react';
import VideoPlayer from './VideoPlayer';
import { ToggleOptions } from './ToggleOptions';

const TOGGLE_OPTIONS = ["File", "Text"]

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [inputOption, setInputOption] = useState<typeof TOGGLE_OPTIONS[0]>(TOGGLE_OPTIONS[0]);
    const [textInput, setTextInput] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > 8 * 1024 * 1024) {
                alert('File size exceeds 8 MB. Please upload a smaller file.');
                event.target.value = '';
            } else {
                setFile(selectedFile);
            }
        }
    };

    const handleSubmit = async () => {
        if (!file && inputOption === 'File') {
            alert('Please select a file to upload.');
            return;
        }
        
        let currentTime = Date.now();

        setIsLoading(true);

        const formData = new FormData();

        formData.append('isText', String(inputOption === 'Text' ? 1 : 0));

        if (inputOption === 'Text') {
            formData.append('text', textInput);
        }

        if (file && inputOption === 'File') {
            formData.append('file', file);
        }

        formData.append('time', String(currentTime));
        
        formData.append('userName', 'Brainrot Anything!');

        try {
            const response = await fetch('https://vibevision.ai/api/generate-video/brainrot', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file');
            }

            const data = await response.json();
            if (data.videoUrl) {
                setVideoUrl(data.videoUrl);
            } else {
                alert('No video URL returned from the server.');
            }
        } catch (error) {
            alert('An error occurred while uploading the file: ' + (error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteFile = () => {
        setFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = ''; 
        }
    };


    return (
        <div className="bg-white p-5 rounded-lg shadow-lg text-center w-full min-h-[340px] flex-1 flex flex-col items-center justify-center">
            <p className="m-0 text-xs text-[#555] font-bold text-left w-full mb-1">
                Supported formats: .png, .jpeg, .jpg, .doc, .docx, .pdf
                <br />Maximum file size: 8MB
            </p><div className="flex h-10 items-center gap-2 w-full">
                {TOGGLE_OPTIONS.map((tab) => (
                    <ToggleOptions
                        text={tab}
                        selected={inputOption === tab}
                        setSelected={setInputOption}
                        key={tab}
                    />
                ))}
            </div>
            <div className='size-full relative'>

                {
                    inputOption == "File"
                        ? (
                            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-full w-full">
                                <label className="border-2 border-dashed border-[#ccc] rounded-lg h-full min-h-[260px] w-full cursor-pointer transition-all duration-300 text-center bg-[#fafafa] relative overflow-hidden flex flex-col items-center justify-center shadow-[0px_48px_35px_-48px_#e8e8e8] hover:border-[#33a1fd] hover:shadow-[0_0_10px_rgba(255,126,95,0.3)] hover:bg-[#fff5f2] focus:border-[#33a1fd] focus:shadow-[0_0_10px_rgba(255,126,95,0.3)] focus:bg-[#fff5f2] mb-4">
                                    {!file ? (
                                        <>
                                            <img src="https://img.icons8.com/dusk/64/upload--v1.png" alt="Upload Icon" className="w-20 mb-2" />
                                            <p className="m-0 text-base text-[#555]">
                                                Drag & drop your files here <br /> or <span className="text-[#33a1fd] font-bold underline">click to upload</span>
                                            </p>
                                        </>
                                    ) : (
                                        // <p className="mt-2.5 font-bold text-[#555]">Uploading file: {file.name}</p>
                                        <div className='h-[260px] w-full flex flex-col items-center justify-center relative'>
                                            {file?.type.startsWith('image/') ?
                                                (
                                                    <img
                                                        src={URL.createObjectURL(file) || 'not found'}
                                                        alt="Uploaded content"
                                                        className="h-full object-contain rounded-lg"
                                                    />
                                                )
                                                :
                                                (
                                                    <p className="mt-2.5 font-bold text-[#555]">Uploading file: {file.name}</p>
                                                )
                                            }
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept=".png, .jpeg, .jpg, .doc, .docx, .pdf"
                                        required
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </label>
                            </form>
                        )
                        : (
                            <textarea
                                placeholder="Enter your text here..."
                                onChange={e => setTextInput(e.target.value)}
                                className='border-2 border-dashed outline-none p-4 border-[#ccc] rounded-lg h-full min-h-[260px] w-full transition-all duration-300 bg-[#fafafa] shadow-[0px_48px_35px_-48px_#e8e8e8] hover:border-[#33a1fd] hover:shadow-[0_0_10px_rgba(255,126,95,0.3)] hover:bg-[#fff5f2] focus:border-[#232988] focus:shadow-[0_0_10px_rgba(255,126,95,0.3)] focus:bg-[#fff5f2] mb-2'>

                            </textarea>
                        )
                }
                
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-[#33a1fd] text-white font-medium border-none py-2.5 px-5 text-base rounded-md cursor-pointer transition-colors duration-300 w-full hover:bg-[#00d4ff]"
                >
                    BRAINROTIFY!
                </button>

                {file && (
                    <button
                        onClick={handleDeleteFile}
                        className="absolute top-2 z-10 right-2 p-2 bg-red-400 transition ease-in-out hover:bg-red-500 text-white text-sm font-medium rounded-lg hover:scale-105" >
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                        </svg>
                    </button>
                )}

            </div>
            {
                isLoading && (
                    <div className="w-full p-8 gap-2 flex flex-col items-center justify-center">
                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <circle r="32" cy="40" cx="40" id="test"></circle>
                            </svg>
                        </div>
                        <span className='leading-5 animate-pulse'>Brainrotting Your file! <br /> Hang tight...</span>
                    </div>
                )
            }
            {
                videoUrl && (
                    <div className='flex flex-col w-full gap-2'>
                        <VideoPlayer videoUrl={videoUrl || 'https://vibevision-bucket.s3.amazonaws.com/673f6f9885fb945764526ea0_brainrot_1734018048511_video.mp4'} />

                        <a href={videoUrl!} target="_blank" rel="noopener noreferrer" download>
                            <button className="bg-[#33a1fd] text-white font-medium border-none py-2.5 px-5 text-base rounded-md cursor-pointer transition-colors duration-300 mt-2.5 w-full hover:bg-[#00d4ff]">
                                Download Video
                            </button>
                        </a>
                    </div>
                )
            }
        </div>
    );
};

export default FileUpload;

