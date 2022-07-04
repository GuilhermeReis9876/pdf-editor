import { useEffect, useRef } from "react";

export default function HomePage() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
        },
        viewer.current
      ).then((instance) => {
        const { Feature } = instance.UI;
        const theme = instance.UI.Theme;
        instance.UI.setLanguage("pt_br");
        instance.UI.setTheme(theme.DARK);
        instance.UI.enableFeatures([Feature.FilePicker]);
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}
