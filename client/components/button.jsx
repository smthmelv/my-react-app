import React from 'react';

const Button = (props) => {
    const { data, type, className, children, onClick } = props;

    return (
        <button
          type={type ? type : "button"}
          className={className ? className : ""}
          children={children ? children : "Default Name"}
          onClick={data ? () => onClick(data) : () => onClick()}
        />
    );
}

export default Button;