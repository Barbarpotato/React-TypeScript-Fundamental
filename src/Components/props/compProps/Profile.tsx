//? import the privateTypes so it can be used in the React.ComponenetType<>
import { PrivateType } from './Private';

//? The Props type of Profile
type PropsType = {
    isLogin: boolean,
    //? component property is the props where the value is the react component.
    //? The react component have type named PrivateType.
    component: React.ComponentType<PrivateType>
}

//? can call component as Component.
export const Profile = ({ isLogin, component: Component }: PropsType) => {
    if (isLogin) {
        //? passing the name prop to the private component
        //? which have the prop type name is PrivateType
        //? that required name property.
        return (
            <Component name='Darmawan'></Component>
        )
    }
    else {
        return (
            <p>Not Login.</p>
        )
    }

}