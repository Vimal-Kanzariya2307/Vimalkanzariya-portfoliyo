interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accentWord?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  accentWord,
}: SectionHeadingProps) {
  let titleContent = <>{title}</>;

  if (accentWord && title.includes(accentWord)) {
    const parts = title.split(accentWord);
    titleContent = (
      <>
        {parts[0]}
        <span className="text-white underline decoration-zinc-600 underline-offset-8">
          {accentWord}
        </span>
        {parts[1]}
      </>
    );
  }

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2.5 font-mono">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {titleContent}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
