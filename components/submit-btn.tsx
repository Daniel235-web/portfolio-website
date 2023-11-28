import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [isPending, setPending] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Set the form to a pending state
    setPending(true);

    try {
      // Perform your form submission logic here
      // For example, you can use fetch or axios to send the form data to a server

      // Simulating a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // After submission is complete, reset the pending state
      setPending(false);

      // Additional logic after successful submission if needed
    } catch (error) {
      // Handle any errors during form submission
  

      // Reset the pending state in case of an error
      setPending(false);
    }
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isPending}
    >
      {isPending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
