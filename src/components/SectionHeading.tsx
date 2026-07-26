interface SectionHeadingProps {
  label?: string;
  heading: string;
}

export default function SectionHeading({ label, heading }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {label && (
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy">{heading}</h2>
    </div>
  );
}
