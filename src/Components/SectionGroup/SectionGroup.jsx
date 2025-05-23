const SectionGroup = ({ sections, bgClass }) => (
  <>
    {sections.map((section) => (
      <section
        id={section.id}
        className={`${section.id}-section border border-2 rounded ${bgClass} p-3 mb-3`}
        key={section.id}
      >
        <h2>{section.title}</h2>
        <p>{section.content}</p>
      </section>
    ))}
  </>
);
export default SectionGroup;