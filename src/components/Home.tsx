import Header from './Header'
import FileUpload from './FileUpload'
import ArrowAnim from '../anims/ArrowAnim'
import VideoPlayer from './VideoPlayer'

function Home() {
  return (
    <div className="min-h-screen flex font-istok font-bold justify-center items-center p-4 bg-gradient-to-br from-[#33a1fd] via-[#3ea6ff] to-[#00d4ff]">
      <section className="flex flex-col items-center justify-center gap-8 w-full md:p-4">
        <Header />
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 max-w-[1080px] w-full flex-1">
          <FileUpload />
          <ArrowAnim />
          <div className="bg-white p-5 rounded-lg shadow-lg text-center w-full min-h-[340px] flex-1 flex flex-col items-center justify-center">
            <VideoPlayer
              videoUrl="https://vibevision-bucket.s3.amazonaws.com/673f6f9885fb945764526ea0_brainrot_1734018048511_video.mp4"
              isSample={true}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
