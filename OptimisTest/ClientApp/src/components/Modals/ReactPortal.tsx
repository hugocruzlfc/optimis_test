import React,{ createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';


interface Props{
    children: React.ReactNode;
    wrapperId: string
}

function ReactPortal({ children, wrapperId = "react-portal-wrapper" }: Props) {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        if (!element) {
          systemCreated = true;
          element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
    
        return () => {
          if (systemCreated && element?.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      }, [wrapperId]);

        if (wrapperElement === null) return null;

    function createWrapperAndAppendToBody(wrapperId) {
        const wrapperElement = document.createElement('div');
        wrapperElement.setAttribute("id", wrapperId);
        document.body.appendChild(wrapperElement);
        return wrapperElement;
      }

  return createPortal(children, document.getElementById(wrapperId));
}
export default ReactPortal;