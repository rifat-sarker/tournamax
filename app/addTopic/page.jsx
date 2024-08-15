export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border w-full px-8 py-2 border-slate-500"
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="border w-full px-8 py-2 border-slate-500"
        type="text"
        placeholder="Topic Description"
      />
      <button className="border bg-green-600 font-bold text-white px-6 py-3 w-fit">
        Add Topic
      </button>
    </form>
  );
}
