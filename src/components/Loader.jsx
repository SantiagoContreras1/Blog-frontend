
import LoadingGif from "../images/Loader.gif"

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader_image">
        <img src={LoadingGif} alt="" />
      </div>
    </div>
  )
}

export default Loader
