export const Mapa = ({ mapSrc }) => {
  return (
    <div>
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: "0", borderRadius: "20px", marginTop: "30px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
