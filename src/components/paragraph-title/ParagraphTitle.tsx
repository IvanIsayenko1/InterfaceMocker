interface ParagraphTitleProps {
  title: string;
  subtitle?: string;
}

const ParagraphTitle: React.FC<ParagraphTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-lg text-gray-500 mt-2">{subtitle}</p>}
    </>
  );
};

export default ParagraphTitle;
