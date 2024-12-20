function ArrowAnim() {
  return (
    <div className="hidden xl:flex min-h-[400px] h-fit justify-center items-center">
            <div className='-translate-x-2'>
              <span className="w-20 h-20 flex items-center justify-center animate-bounce-x">
                <svg
                  width="48"
                  height="57"
                  viewBox="0 0 16 19"
                  fill="#111"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ animation: 'arrow 1s linear infinite' }}
                >
                  <circle cx="1.61321" cy="1.61321" r="1.5" fill="white"></circle>
                  <circle cx="5.73583" cy="1.61321" r="1.5" fill="white"></circle>
                  <circle cx="5.73583" cy="5.5566" r="1.5" fill="white"></circle>
                  <circle cx="9.85851" cy="5.5566" r="1.5" fill="white"></circle>
                  <circle cx="9.85851" cy="9.5" r="1.5" fill="white"></circle>
                  <circle cx="13.9811" cy="9.5" r="1.5" fill="white"></circle>
                  <circle cx="5.73583" cy="13.4434" r="1.5" fill="white"></circle>
                  <circle cx="9.85851" cy="13.4434" r="1.5" fill="white"></circle>
                  <circle cx="1.61321" cy="17.3868" r="1.5" fill="white"></circle>
                  <circle cx="5.73583" cy="17.3868" r="1.5" fill="white"></circle>
                </svg>
              </span>
            </div>
          </div>
  )
}

export default ArrowAnim
