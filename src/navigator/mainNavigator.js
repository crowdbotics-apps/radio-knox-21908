import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20159538Navigator from '../features/BlankScreen20159538/navigator';
import BlankScreen19159537Navigator from '../features/BlankScreen19159537/navigator';
import Settings159522Navigator from '../features/Settings159522/navigator';
import Settings159484Navigator from '../features/Settings159484/navigator';
import Settings159465Navigator from '../features/Settings159465/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20159538: { screen: BlankScreen20159538Navigator },
BlankScreen19159537: { screen: BlankScreen19159537Navigator },
Settings159522: { screen: Settings159522Navigator },
Settings159484: { screen: Settings159484Navigator },
Settings159465: { screen: Settings159465Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
