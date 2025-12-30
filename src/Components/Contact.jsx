import Section from "./Section";
import { MdOutlineMail } from "react-icons/md";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_bplalyu",
        "template_08p8cm2",
        templateParams,
        "oexhQTawulHi2mkMd",
      )
      .then(() => {
        alert("Message Sent Successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        alert("حصل خطأ ❌");
      });
  };

  return (
    <Section title={t("contact.title")} id={"contact"} type={"secSection"}>
      <div className="grid gap-14 pt-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            {t("contact.connect")}
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            {t("contact.des")}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                {t("contact.name")}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                type="text"
                id="name"
                name="name"
                placeholder={t("form.name")}
              />
            </div>
            <div>
              <label
                className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                {t("contact.email")}
              </label>
              <input
                placeholder={t("form.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
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
                {t("contact.message")}
              </label>
              <textarea
                placeholder={t("form.message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-700"
            >
              <LuSend />
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
