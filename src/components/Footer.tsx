interface FooterProps {
  content: {
    copyright: string;
  };
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="text-center py-6 border-t border-gray-900 relative z-10">
      <p className="text-gray-500">
        {content.copyright} {/* */}
      </p>
    </footer>
  );
}