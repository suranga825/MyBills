import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Image,
    RefreshControl
  } from 'react-native';

  import { connect } from 'react-redux';
  import { fetchBiils } from './actions/billsAction.js';
  import { bindActionCreators } from 'redux';

  import { ListItem } from 'react-native-elements'

  const Item = ({ title }) => (
    <ListItem style={styles.item} bottomDivider>
         <Image
        style={styles.stretch}
        source={{uri:'https://hwc-web.s3-ap-southeast-2.amazonaws.com/assets/src/uploads/images/Interactive-bill/account-bill.jpg'}}
        />
       <ListItem.Content>
         <View style={{flexDirection: "row"}}>
            <View style={{flexDirection: 'column', flex: 1}}>
                <ListItem.Title style={styles.title}>{title}</ListItem.Title>
                <ListItem.Subtitle>{"20 Dec 2020"}</ListItem.Subtitle>
            </View>
             <View style={styles.subtitleView}>
                <Text style={{fontSize: 18, fontWeight:"800"}} >$ 546.79</Text>
                <Text>Processing</Text>
             </View>
        </View>
        </ListItem.Content>
      </ListItem>
  );

  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


class Home extends Component {

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </SafeAreaView>
    );
  }
  
}


const mapStateToProps = state => ({
  myBills: state.bills.myBills,
});

const ActionCreators = Object.assign(
  {},
  fetchBiils,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export function Home() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//   const [isRefreshing, setRefreshing] = useState(false);

//   const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'SA Water',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'SA Water',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'SA Water',
//     },
//   ];

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(
//       () => { setRefreshing(false)},
//       2000
//     )
//   }, []);


//   const Item = ({ title }) => (
//     <ListItem style={styles.item} bottomDivider>
//          <Image
//         style={styles.stretch}
//         source={{uri:'https://hwc-web.s3-ap-southeast-2.amazonaws.com/assets/src/uploads/images/Interactive-bill/account-bill.jpg'}}
//         />
//        <ListItem.Content>
//          <View style={{flexDirection: "row"}}>
//             <View style={{flexDirection: 'column', flex: 1}}>
//                 <ListItem.Title style={styles.title}>{title}</ListItem.Title>
//                 <ListItem.Subtitle>{"20 Dec 2020"}</ListItem.Subtitle>
//             </View>
//              <View style={styles.subtitleView}>
//                 <Text style={{fontSize: 18, fontWeight:"800"}} >$ 546.79</Text>
//                 <Text>Processing</Text>
//              </View>
//         </View>
//         </ListItem.Content>
//       </ListItem>
//   );

  
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );


//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         refreshControl={
//           <RefreshControl
//             refreshing={isRefreshing}
//             onRefresh={onRefresh}
//           />
//         }
//       />
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({

    title: {
        color: '#000',
        fontSize: 20,
        fontWeight:"300"
    },

    subtitle: {
        color: '#000',
        fontSize: 14,
        fontWeight:"300"
    },

    stretch: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        borderWidth: 1,
        borderColor: '#000'
    },
    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 5, 
        justifyContent: 'flex-end',
        alignItems:"flex-end"
        
    },

  });
  