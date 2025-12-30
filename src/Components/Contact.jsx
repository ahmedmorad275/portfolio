import Section from "./Section";
import { MdOutlineMail } from "react-icons/md";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { LuSend } from "react-icons/lu";

export default function Contact() {
  return (
    <Section title={"Get In Touch"} id={"contact"} type={"secSection"}>
      <div className="grid gap-14 pt-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
            Let's Contact
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            I'm always interested in hearing about new projects and
            opportunities, Wether you have a question or just want to say Hi,
            feel free to reach out!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:ahmedmorad569@gmail.com"
              className="flex items-center gap-4 rounded-lg bg-white p-4 text-lg font-semibold text-gray-800 shadow-md transition-all duration-300 hover:text-blue-600 hover:shadow-lg dark:bg-slate-900 dark:text-gray-200 dark:hover:text-blue-400"
            >
              <MdOutlineMail />
              <h3>Email</h3>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedmorad275"
              className="flex items-center gap-4 rounded-lg bg-white p-4 text-lg font-semibold text-gray-800 shadow-md transition-all duration-300 hover:text-blue-600 hover:shadow-lg dark:bg-slate-900 dark:text-gray-200 dark:hover:text-blue-400"
            >
              <LuLinkedin />
              <h3>LinkedIn</h3>
            </a>
            <a
              href="https://github.com/ahmedmorad275"
              className="flex items-center gap-4 rounded-lg bg-white p-4 text-lg font-semibold text-gray-800 shadow-md transition-all duration-300 hover:text-blue-600 hover:shadow-lg dark:bg-slate-900 dark:text-gray-200 dark:hover:text-blue-400"
            >
              <LuGithub />
              <h3>GitHub</h3>
            </a>
          </div>
        </div>
        <div>
          <form action="#" className="space-y-6">
            <div>
              <label
                className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label
                className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label
                className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-700"
            >
              <LuSend />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
