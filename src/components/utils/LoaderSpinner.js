import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <div className="container m-auto mt-8">
      <Loader
        className="flex justify-center m-auto items-center "
        type="MutatingDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={30000} //3 secs
      />
    </div>
  );
}
