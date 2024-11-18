import { ComponentProps } from "react";
import LockIcon from '@material-ui/icons/Lock';

const Button = (props: ComponentProps<'button'>) => {
    return (
        <>
            <LockIcon />
            <button {...props} />
        </>
    )
}

export default Button;
