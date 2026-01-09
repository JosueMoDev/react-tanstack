import { FiRefreshCcw } from "react-icons/fi";

export default function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="flex items-center justify-center w-full h-52">
        <FiRefreshCcw size={40} className="animate-spin" />
      </div>
    </div>
  );
}
