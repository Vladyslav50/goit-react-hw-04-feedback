export const Section = ({ title, children }) => {
  return (
    <section>
      <p>{title}</p>
      {children}
    </section>
  );
};
