import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SelectList } from 'react-native-dropdown-select-list';
import CustomButton from '../../components/CustomButton';
//
import { useNavigation } from '@react-navigation/native';


const data = [
  {key:'1', value:'Select', disabled:true},
  {key:'2', value:'Abia'},
  {key:'3', value:'Ondo'},
  {key:'4', value:'Osun'},
  {key:'5', value:'Oyo'}
]

const Personal = () => {
  const [selected, setSelected] = React.useState("");

  //
  const navigation = useNavigation();

  return (
    <View className='relative' style={{flex:1}}>
      {/* Image */}
      <View className='relative'>
        <View className='w-[159px] h-[159px] rounded-full bg-slate-500 self-center my-8'>

        </View>
        {/*  */}
        <View className='absolute bottom-10 left-[50%] translate-x-10 w-9 h-9  flex items-center justify-center rounded-full bg-kprimary'>
          <MaterialCommunityIcons
            name = "pencil-outline"
            color="#FFFFFF"
            size={22}
          />
        </View>
      </View>
     
      <Input
        label="First name"
        placeholder="Enter first name"
      />

      <Input
        label="Last name"
        placeholder="Enter last name"
      />

      <Input
        label="Username"
        placeholder="Enter username"
      />

      <View className='relative'>
        <Text style={[styles.label]}>Location</Text>
        <SelectList
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:4, borderColor: "#80747B", marginBottom: 25, paddingVertical: 17}}
          search={false} 
          placeholder='Select Location'
        />
      </View>

      <Input
        label="Bio"
        placeholder="Enter a short bio"
      />

      <View className='absolute bottom-10 w-full'>
        <CustomButton 
          title='Next' 
          // onPress={() => {
          //   navigation.navigate('TopNavPanel', {
          //   });
          // }}
      
        />
      </View>
    </View>
  )
}

export default Personal

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -8,
    left: 10,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#4E444B",
    zIndex: 10
  }
})