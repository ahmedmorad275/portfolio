import Reveal from "./Reveal";

export default function Section({ id, title, children, type }) {
  return (
    <section id={id} className={`py-20 px-4 ${type}`}>
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="mb-4 font-bold text-gray-800 text-4xl md:text-5xl dark:text-white">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
