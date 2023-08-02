import React from 'react';
import styled from 'styled-components';

export interface TextWrapperProps {
    fontFamily?: 'Euclid Circular A' | 'Inter' | 'Syne' | 'Avander';
    fontStyle?: string;
    fontWeight?: 'bold' | 300 | 500 | 600;
    fontSize?: 144 | 44 | 40 | 32 | 24 | 18 | 16 | 14 | 12 | number;
    FletterSpacing?: string;
    Fcolor?: string;
    text: string | JSX.Element;
    align?: 'left' | 'center' | 'right';
    className?: string;
    lineHeight?: string;
    margin?: number;
}

const TextWrapper = (props: TextWrapperProps) => {
    const {
        fontFamily = 'Euclid Circular A',
        fontStyle = 'normal',
        fontWeight = 300,
        fontSize = 16,
        FletterSpacing = 'normal',
        Fcolor = 'rgb(235, 235, 235',
        text = '',
        className = '',
        align = 'left',
        margin = 10,
    } = props;

    if (typeof text === "string") {
        return (
            <StyledText
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                letterSpacing={FletterSpacing}
                fcolor={Fcolor}
                style={{ color: Fcolor }}
                className={className}
                align={align}
                margin={margin}
            >
                {text}
            </StyledText>
        );
    } else {
        return (
            <StyledDiv
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                letterSpacing={FletterSpacing}
                fcolor={Fcolor}
                style={{ color: Fcolor }}
                className={className}
                align={align}
                margin={margin}
            >
                {text}
            </StyledDiv>
        )
    }
};

export default TextWrapper;

interface StyledTextProps {
    fontFamily: 'Euclid Circular A' | 'Inter' | 'Syne' | 'Avander';
    fontStyle: string;
    fontWeight: 'bold' | 300 | 500 | 600;
    fontSize: 144 | 44 | 40 | 32 | 24 | 18 | 16 | 14 | 12 | number;
    letterSpacing: string;
    align: 'left' | 'center' | 'right';
    fcolor: string;
    margin: number;
}

const StyledText = styled.p<StyledTextProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};;
`;

const StyledDiv = styled.div<StyledTextProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.align};
`;