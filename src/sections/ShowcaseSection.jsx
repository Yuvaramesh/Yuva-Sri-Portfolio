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
      <InfiniteMenu items={items} />
    </div>
  );
}
