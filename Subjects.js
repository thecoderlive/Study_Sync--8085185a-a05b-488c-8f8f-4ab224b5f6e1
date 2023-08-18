import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'



function Subjects({ item, navigation }){

const onPressViewNotes = () => {}

function subjectsItem({ item }){
return (
<View style={styles.subjects_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.subject_name} numberOfLines={1}>{item.subject_name}</Text>
<TouchableOpacity  onPress={onPressViewNotes}>
    <View style={styles.view_notes}>{'View Notes'}</View>
</TouchableOpacity>
</View>
</View>
)}

return (
<FlatList
    style={styles.subjects}
    data={item}
    renderItem={subjectsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Subjects;

const styles = StyleSheet.create({
    "subject_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "view_notes": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    }
});