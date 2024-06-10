import { Spin, SpinProps } from "antd";

import { StyledLoadingIcon } from "./Loading.style";

type Props = SpinProps;

const Spinner: React.FC<Props> = (props) => {
  return <Spin {...props} indicator={<StyledLoadingIcon spin />} />;
};

export default Spinner;
