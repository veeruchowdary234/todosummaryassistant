
const SummaryButton = ({ onClick }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all"
      >
        Summarize and Send to Slack
      </button>
    </div>
  );
};
export default SummaryButton;
