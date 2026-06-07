"use client";

/**
 * Signup Form - email newsletter signup
 */
interface SignupFormProps {
  heading?: string;
  description?: string;
}

export default function SignupForm({
  heading = "Stay in the Sound",
  description = "Sign up for updates and events",
}: SignupFormProps) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
        {description && (
          <p className="text-lg text-gray-300 mb-8">{description}</p>
        )}

        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          We respects your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
