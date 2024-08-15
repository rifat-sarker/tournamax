export default function EditTopic() {
  return (
    <div>
      <form className="flex flex-col w-[60%]  rounded-lg p-6 shadow-lg mx-auto gap-3">
        <input
          className="border rounded-md w-full px-4 py-2 my-3 border-slate-200"
          type="text"
          placeholder="Topic Title"
        />
        <textarea
          rows={4}
          className="border rounded-md w-full px-4 py-2 mb-3 border-slate-200"
          type="text"
          placeholder="Topic Description"
        />
        <button className="border bg-green-600 font-bold text-white px-6 py-3 rounded-md">
          Update Topic
        </button>
      </form>
    </div>
  );
}
