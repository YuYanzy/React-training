const ReactDOM = {
  createRoot: (rootHTMLElement) => {
    return {
      render: (reactElem) => {
        // const elem = document.createElement("div");
        // elem.textContent = "placeholder";
        // rootHTMLElement.append(elem);

        const dom =
          element.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type);

        if (element.props.children instanceof Array) {
          console.log(element.props.children);
          element.props.children.forEach((child) =>
            ReactDOM.createRoot(rootHTMLElement).render(child, dom)
          );
        } else {
          dom.textContent = element.props.children;
        }
      },
    };
  },
};

export default ReactDOM;
