export const LittleCip = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none">
      <div className="w-[150px] h-[260px] md:w-[220px] md:h-[380px] rounded-2xl overflow-hidden pointer-events-auto">
        <iframe
          src="https://app.heygen.com/embeds/fd593fe69433452dad2d85eb2f42a45c"
          title="Little Cip"
          allow="microphone; camera; autoplay"
          allowTransparency
          className="w-full h-full border-0 bg-transparent"
          style={{ background: "transparent" }}
        />
      </div>
    </div>
  );
};
