import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

function Logo({ type }) {
  return (
    <S.Title type={type}>
      <S.SpanFirstLetter>A</S.SpanFirstLetter>
      <S.SpanSecondLetter>B</S.SpanSecondLetter>
      <S.SpanThirdLetter>C</S.SpanThirdLetter>
      <S.SpanPhrase type={type}>for Kids</S.SpanPhrase>
    </S.Title>
  );
}

Logo.defaultProps = {
  type: "regular",
};

Logo.propTypes = {
  type: PropTypes.string,
};

export default Logo;
