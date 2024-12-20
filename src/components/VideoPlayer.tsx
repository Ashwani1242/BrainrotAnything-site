import React from 'react';

interface VideoPlayerProps {
    videoUrl: string;
    isSample?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, isSample = false }) => {
    return (
        <div className="bg-white md:p-5 rounded-lg shadow-lg text-center w-full min-h-[340px] flex-1 flex flex-col items-center justify-center">
            <div className={`${isSample ? '' : 'mt-5'} w-full`}>
                {!isSample && <p className="text-lg text-left font-semibold mb-2">Your video is ready! Watch it below:</p>}
                {isSample && <p className="text-left m-0 mb-2.5">Sample Brainrot!:</p>}
                <video
                    controls={!isSample}
                    autoPlay={isSample}
                    muted={isSample}
                    loop={isSample}
                    className="rounded-lg max-h-[480px] bg-transparent w-fit mx-auto"
                    disablePictureInPicture
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoPlayer;

