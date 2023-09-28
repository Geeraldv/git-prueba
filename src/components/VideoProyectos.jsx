export const VideoProyectos = ({ videoSrc }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="600"
        style={{
          border: "0",
          borderRadius: "20px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
