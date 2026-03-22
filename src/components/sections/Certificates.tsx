import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { certificates } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { TCertificate } from "../../types";

const categoryColors: Record<TCertificate["category"], string> = {
  army: "from-[#1a1a2e] to-[#16213e] border-[#915EFF]",
  technical: "from-[#1a1a2e] to-[#0f3460] border-[#00d4ff]",
  academic: "from-[#1a1a2e] to-[#1b2838] border-[#f272c8]",
  participation: "from-[#1a1a2e] to-[#1a2a1a] border-[#4ade80]",
};

const categoryBadgeColors: Record<TCertificate["category"], string> = {
  army: "bg-[#915EFF]/20 text-[#915EFF]",
  technical: "bg-[#00d4ff]/20 text-[#00d4ff]",
  academic: "bg-[#f272c8]/20 text-[#f272c8]",
  participation: "bg-[#4ade80]/20 text-[#4ade80]",
};

const categoryIcons: Record<TCertificate["category"], string> = {
  army: "🎖️",
  technical: "💻",
  academic: "🎓",
  participation: "🏅",
};

const CertificateCard = ({
  certificate,
  index,
}: {
  certificate: TCertificate;
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className={`bg-gradient-to-br ${categoryColors[certificate.category]} rounded-2xl border p-6 flex flex-col gap-3 shadow-lg`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl">{categoryIcons[certificate.category]}</span>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${categoryBadgeColors[certificate.category]}`}
        >
          {certificate.category}
        </span>
      </div>

      <h3 className="text-white font-bold text-lg leading-tight">
        {certificate.title}
      </h3>

      <div className="flex flex-col gap-1">
        <p className="text-[#aaa6c3] text-sm font-medium">{certificate.issuer}</p>
        <p className="text-[#915EFF] text-xs">{certificate.date}</p>
      </div>

      <p className="text-[#dfd9ff] text-sm leading-relaxed">
        {certificate.description}
      </p>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#aaa6c3] text-sm sm:text-base uppercase tracking-wider">
          Achievements & Recognition
        </p>
        <h2 className="text-white font-black text-3xl sm:text-5xl">
          Certificates.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[#aaa6c3] mt-3 max-w-3xl text-base leading-relaxed"
      >
        A collection of certifications, achievements, and recognitions that
        reflect my dedication beyond software development — from national-level
        NCC participation to technical excellence.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.title} certificate={cert} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
