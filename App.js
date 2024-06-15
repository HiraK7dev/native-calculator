import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {

  const btn = [`C`, `%`, `<-`, `/`, `7`, `8`, `9`, `x`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `00`, `0`, `.`, `=`];
  const [ans, setAns] = useState(``);
  function getResult(val){
    try {
      if(val == `C`){
        setAns(``);
      } else if(val == `%`){
        setAns(ans + `/100`);
      } else if(val == `<-`){
        setAns(ans.slice(0, ans.length - 1));
      } else if(val == `x`){
        setAns(ans + `*`);
      } else if(val == `=`){
        setAns(eval(ans));
      } else {
        setAns(ans + val);
      }
    } catch (error) {
      alert(`Error`);
      setAns(``);
    }
  }
  return (
    <View style={styles.main}>
      <ScrollView horizontal={true} style={styles.displayDiv}>
        <Text style={styles.display}>{ans}</Text>
      </ScrollView>
      <View style={styles.controlPanel}>
        <View style={styles.controlPS}>
        {
          btn.map((val) => {
            return <TouchableOpacity style={styles.button} onPress={() => {getResult(val)}}>
              <Text style={styles.buttenText}>{val}</Text>
            </TouchableOpacity>
          })
        }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  displayDiv: {
    height: '30%',
    marginTop: StatusBar.currentHeight,
    // backgroundColor: 'grey',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 0,
    flexDirection: 'row-reverse'
  },
  display: {
    // backgroundColor: 'orange',
    textAlign: 'right',
    fontSize: 45,
    fontWeight: '300',
    letterSpacing: 5,
    justifyContent: 'center',
    height: '90%',
    width: '100%',
    padding: 22,
    borderRadius: 20,
  },
  controlPanel: {
    width: '100%',
    height: '70%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  controlPS: {
    backgroundColor: 'orange',
    width: '100%',
    height: '85%',  
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  button: {
    width: '25%',
    height: '17%',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttenText: {
    fontSize: 25
  }
});
