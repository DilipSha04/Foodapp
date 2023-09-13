import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oopps...</h1>
            <h3>Something went wrong</h3>
            <p>{err.status} : {err.statusText}</p>
        </div>
    );
};

export default Error;