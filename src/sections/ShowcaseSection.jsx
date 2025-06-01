import InfiniteMenu from "../components/InfiniteMenu";

const items = [
  {
    image: "xeno.png",
    link: "https://xeno-test.vercel.app/",
    title: "TestCaseCode Generator",
    description:
      "AI-powered Testcase Code Generator that converts uploaded documents into executable test scripts using vector search and prompt-driven automation",
  },
  {
    image: "EVAHandwriting.png",
    link: "https://github.com/Yuvaramesh/KinderGarten",
    title: "EVA Handwriting App",
    description:
      "Built an AI handwriting module for Smart EVA with stroke tracing and adaptive OCR-based feedback",
  },
  {
    image: "AiTopia.jpg",
    link: "https://github.com/Yuvaramesh/AITopia",
    title: "AITopia-Educreativity App",
    description:
      " A Multilingual Educreativity platform blending voice interaction, comic creation, handwriting learning and AI feedback,",
  },

  {
    image: "ragchatapp.png",
    link: "https://rag-chatapp-by-yuva.streamlit.app/",
    title: "RAG Chat APP",
    description:
      " RAG-based chat app that retrieves context from uploaded documents using vector search and answers queries using LLMs",
  },
];

export default function ShowcaseSection() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      {/* Title */}
      {/* Title */}
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xl font-bold text-neutral-100 z-50">
        Rotate and Explore Projects
      </h2>
      <InfiniteMenu items={items} />
    </div>
  );
}
