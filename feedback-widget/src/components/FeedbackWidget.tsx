import { useEffect, useState } from "react";

type Feedback = {
  id: string;
  message: string;
};

const MAX_LENGTH = 280;

export default function FeedbackWidget() {
  const [text, setText] = useState<string>("");
  const [submittedFeedback, setSubmittedFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    console.log("Feedback widget mounted");
  }, []);

  useEffect(() => {
    console.log(`Total feedback: ${submittedFeedback.length}`);
  }, [submittedFeedback]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Still here...");
    }, 5000);

    return () => clearInterval(id);
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = text.trim();
    if (!message) return;

    const id = crypto.randomUUID();
    console.log(`Submitting feedback with id: ${id}`);

    setSubmittedFeedback((previous) => [...previous, { id, message }]);
    setText("");
  }

  function handleDelete(id: string) {
    console.log(`Deleting feedback with id: ${id}`);
    setSubmittedFeedback((previous) =>
      previous.filter((item) => item.id !== id),
    );
  }

  const isEmpty = text.trim().length === 0;

  return (
    <section className="widget">
      <h2>Tell us what you think should improve or What you love at TESA</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          maxLength={MAX_LENGTH}
          rows={4}
          placeholder="What's your thought"
        />

        <div className="meta">
          <span>
            {text.length} / {MAX_LENGTH}
          </span>
          <button
            type="submit"
            disabled={isEmpty}
          >
            Send feedback
          </button>
        </div>
      </form>

      {submittedFeedback.length === 0 ? (
        <p className="empty">No feedback submitted yet.</p>
      ) : (
        <ul className="list">
          {submittedFeedback.map((item) => (
            <li key={item.id}>
              <span>{item.message}</span>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete feedback: ${item.message}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
