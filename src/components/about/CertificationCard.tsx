import { ExternalLink } from "lucide-react";

type CertificationCardProps = {
  title: string;
  issuer: string;
  year: string;
  link?: string; // optional, since you check {link && ...}
};

const CertificationCard: React.FC<CertificationCardProps> = ({ title, issuer, year, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      {/* Certificate Info */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-primary-600 dark:text-primary-400">{issuer}</p>
        <p className="text-gray-500 dark:text-gray-500 text-sm">{year}</p>

        {/* View Certificate Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
