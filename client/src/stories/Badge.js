import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

/**
 * Primary UI component for user interaction
 */

const BadgeElement = styled.div`
  padding: 0.7rem 1rem;
  color: ${(props) => (props.color ? props.color : "var(--white)")};
  color: ${(props) => {
    const type = props.type;
    switch (type) {
      case "kutsche":
      case "cta":
        return "var(--black)";
      default:
        return "var(--white)";
    }
  }};

  background-color: ${(props) => {
    const type = props.type;
    switch (type) {
      case "cargo":
        return "var(--cargo)";
      case "transparent":
        return "transparent";
      case "direct":
        return "var(--direct)";
      case "kutsche":
        return "var(--kutsche)";
      case "cta":
        return "var(--white)";
      default:
        return "var(--primary-color)";
    }
  }};

  text-align: center;
  font-weight: bold;

  border-radius: 50%;
  border-radius: var(--border-radius);

  box-shadow: var(--shadow);
`;

export const Badge = ({
  backgroundColor,
  color,
  type,
  size,
  label,
  ...props
}) => {
  return (
    <BadgeElement type={type} {...props}>
      {label}
    </BadgeElement>
  );
};

Badge.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["direct", "kutsche", "cargo", "cta"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Button contents
   */
  color: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
