
//? apart from the variant props, button props also
//? include react.componentprops and specified th generic type <button>.
type buttonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

//? ...rest meaning that other props that assed to this component will be received.
export const CustomButton = ({ variant, children, ...rest }: buttonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}