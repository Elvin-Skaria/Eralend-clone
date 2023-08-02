import React from "react";

interface IProps {
    trackingid?: string;

}

type props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Anchor = (props: IProps & props) => {


    return (
        <a {...props}>
            {props.children}
        </a>
    )
}

export default Anchor;