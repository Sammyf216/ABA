import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

// ** Constants 
import FontSize from '../constants/FontSize'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

// ** Layouts
import Layout from '../layouts/Layout'

// ** Third Pary
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

// ** Components
import Input from "../components/Input";
import { Divider } from 'native-base'
import BottomSheet from '../components/bottom-sheet/BottomSheet'


const Profile = ({navigation}: {navigation: any}) => {
  const [show, setShow ] = useState(false) 

  return (
      <Layout
        title='Profile'
        navigation={navigation}
        drawerNav
      >
        <View
          style={styles.container}
        >
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              {/*  */}
              <View className='flex-row items-center justify-between'>
                {/* image  */}
                <View className='flex-row items-center space-x-3'>
                  {/* Image */}
                  <View className='h-12 w-12 flex items-center justify-center rounded-2xl bg-ksecondary'>
                    <Text className='text-white text-sm font-bold'>A</Text>
                  </View>
                  <View className='space-y-1'>
                    <Text className='text-kblack text-sm font-normal'>Loukia Tsami</Text>
                    <Text className='text-kdesc text-[11px] text-medium'>@loukia124</Text>
                  </View>
                </View>

                {/* more icon */}
                <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                  <MaterialCommunityIcons name='account-edit-outline' size={30} color="#4E444B"/>
                </TouchableOpacity>
              </View>

              {/*  */}
              <View style={{marginVertical: 25}} className="" >
                {/* Email Address set up */}
                <Input
                  label="Bio"
                  placeholder="What’s your bio"
                />
              </View>

              <View className='space-y-8'>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  className='flex-row items-center space-x-5 '
                >
                  {/* icon */}
                  <AntDesign name="user" size={15}/>
                  {/* name */}
                  <Text className='text-kblack2 text-sm font-normal '>Set your status</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  onPress={() => navigation.navigate("ProfileNotification")}
                  className='flex-row items-center space-x-5'>
                  {/* icon */}
                  <AntDesign name="user" size={15}/>
                  {/* name */}
                  <Text className='text-kblack2 text-sm font-normal '>Pause Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className='flex-row items-center space-x-5'
                  onPress={() => navigation.navigate("CommunityInvites")}
                >
                  {/* icon */}
                  <AntDesign name="user" size={15}/>
                  {/* name */}
                  <Text className='text-kblack2 text-sm font-normal '>Community Invites</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("ProfilePreview")}
                  className='flex-row items-center space-x-5'>
                  {/* icon */}
                  <AntDesign name="user" size={15}/>
                  {/* name */}
                  <Text className='text-kblack2 text-sm font-normal '>Profile Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className='flex-row items-center space-x-5'
                  onPress={() => navigation.navigate("SavedItems")}
                >
                  {/* icon */}
                  <AntDesign name="user" size={15}/>
                  {/* name */}
                  <Text className='text-kblack2 text-sm font-normal ' >Saved Items</Text>
                </TouchableOpacity>
               
                {/* BottomSheet component */}
              </View>
            
            </View>
            {/* BottomSheet component */}
            <BottomSheet 
              show={show}
              onDismiss={() => {
                setShow(false);
              }}
              height={0.25}
              enableBackdropDismiss
            >
              <View>
                <Text className='text-medium text-[16px] text-black '>Set Status</Text>

                <View className='mt-6'>
                  <TouchableOpacity>
                    <Text className='text-ktext font-normal text-medium ml-4 text-[16px]'>Active </Text>
                  </TouchableOpacity>
                  <Divider className='my-4' />
                  <TouchableOpacity>
                    <Text className='text-ktext font-normal ml-4  text-[16px] '>Away</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheet>
          </View>
        </View>
      </Layout>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  crmCardContainer: {
    width: '100%',
    height: 66,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: FontSize.base,
    paddingVertical: 10,
    paddingHorizontal:20,
    marginVertical: 10,
    alignItems: 'center'
  },
  divider: {
    height: "100%",
    backgroundColor: Colors.text,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginHorizontal: 18
  },
  title: {
    fontFamily: Font['inter-medium'],
    fontSize: FontSize.small,
    color: Colors.text,
  },
  description: {
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.xsmall,
    color: Colors.gray,
  },

})