
type horizontalPosition = 'left' | 'center' | 'right'
type verticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    //? it will have center-center value, we dont want it.
    //? the solution is to create the Exclude<> where the second param
    //? was the value we want to exclude and replace it with center.
    position: Exclude<`${horizontalPosition}-${verticalPosition}`, 'center-center'> |
    'center'
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>Toast Notification - {position} </div>
    )
} 