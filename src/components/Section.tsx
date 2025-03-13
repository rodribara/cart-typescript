type SectionProps = {
  title?: string;
  children: React.ReactNode;
};
const Section = ({ children, title = "My Subjeading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
