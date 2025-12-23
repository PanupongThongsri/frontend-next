
export default function History() {
  return (
    <div
      style={{
        height: "100vh", // ความสูงสมมติ เพื่อให้เห็นการเลื่อน
        background: "#f0f2f5",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-4xl font-bold mb-4">History</h1>
      <p className="text-lg text-gray-600">เนื้อหาเกี่ยวกับฉัน...</p>
    </div>
  );
}