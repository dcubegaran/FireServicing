import { View,Text,Button } from 'react-native';
import { NavigationProp, DrawerActions,} from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {
  navigation: DrawerNavigationProp<Record<string, object>, 'Home'>;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.dispatch(DrawerActions.jumpTo('Profile'))}
      />
    </View>
  );
};

export default HomeScreen;
