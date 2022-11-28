// React.ReactNode = All of it.
// React.Child = one react element
// React.Child[] = more than one react element.
// JSX.element = one tag html
// JSX.element[] = more than one tag html

type HeadingProps = {
    children: React.ReactNode
};

export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <>{props.children}</>
            <h1>something in my above</h1>
        </div>

    )
};