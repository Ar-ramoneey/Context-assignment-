import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();
  const { formData, formDataUpdate } = useForm();
  function handleclick() {
    navigate("/confirmation");
  }
  function toggleBack() {
    navigate("/");
  }

  return (
    <div className="bg-white flex justify-center my-10 ">
      <div className="p-4 rounded-lg border shadow w-110 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold my-5">Step 2: Address</h1>

        <input
          type="text"
          placeholder="Street"
          value={formData.street}
          onChange={(e) => formDataUpdate("street", e.target.value)}
          className="block border rounded-lg p-1 mb-2 w-full "
        />

        <div className="flex gap-2">
          <button
            onClick={toggleBack}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Prev
          </button>
          <button
            onClick={handleclick}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
