import { SpinSize } from "antd/lib/spin";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Spinner from "./Spinner";
import { StyledBackdrop, StyledLoadingIcon, StyledRow } from "./Loading.style";

type Props = {
  size?: SpinSize;
};

const Loading: React.FC<Props> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  const element = isMounted && document.querySelector("body");

  return element
    ? createPortal(
        <StyledRow>
          <StyledBackdrop />
          <Spinner
            size={props.size || "large"}
            indicator={<StyledLoadingIcon spin />}
          />
        </StyledRow>,
        element
      )
    : null;
};

export default Loading;
