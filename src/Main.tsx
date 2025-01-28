import '../gesture-handler.native';

import { BottomTabsNavigator } from './presentation/navigators/BottomTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const Main = () => {
    return (
        <NavigationContainer>
            <BottomTabsNavigator/>
        </NavigationContainer>
    )
}