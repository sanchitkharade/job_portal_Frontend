import { useState } from "react";
import { TextInput, Textarea, Button, Notification } from "@mantine/core";
import { IconMail, IconMessageCircle, IconSend } from "@tabler/icons-react";

const Feedback=()=> {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-mine-shaft-950 flex items-center justify-center p-6">
      <div className="bg-mine-shaft-900 shadow-lg rounded-2xl p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-bright-sun-400 mb-4 flex items-center">
          <IconMessageCircle size={30} className="mr-2 text-bright-sun-400" /> Feedback
        </h1>
        <p className="text-gray-300 mb-6">
          We’d love to hear your thoughts! Share your feedback with us. 💬
        </p>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            leftSection={<IconMail size={20} className="text-gray-400" />}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            classNames={{ input: "bg-gray-800 text-white placeholder-gray-500" }}
          />
          <Textarea
            placeholder="Your feedback..."
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            required
            minRows={4}
            classNames={{ input: "bg-gray-800 text-white placeholder-gray-500" }}
          />
          <Button
            type="submit"
            leftSection={<IconSend size={20} />}
            autoContrast>
            Send Feedback
          </Button>
        </form>

        {/* Success Notification */}
        {submitted && (
          <Notification
            title="Thank You!"
            color="green"
            withCloseButton={false}
            className="mt-4 bg-gray-800 text-white border border-green-500"
          >
            Your feedback has been received. 🎉
          </Notification>
        )}
      </div>
    </div>
  );
}
export default Feedback;
