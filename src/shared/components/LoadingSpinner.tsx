import { FiRefreshCcw } from "react-icons/fi";

export default function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="animate-spin">
        <FiRefreshCcw size={24} />
      </div>
    </div>
  );
}
