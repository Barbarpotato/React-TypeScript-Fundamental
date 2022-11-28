// we can still receive the random string instead 3 value that we want from the parent node.
// to prevent this, we can use the union of a string literal, 
// to raise an error if parent node giving a random string.
type StatusProps = {
    status: 'success' | 'loading' | 'error'
};

export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'success') {
        message = "Data Fetched Successfully";
    } else if (props.status === "loading") {
        message = "Loading..."
    } else if (props.status === "error") {
        message = "Error Fetching data";
    }
    return (
        <h2>
            Status - {message}
        </h2>
    )
};
