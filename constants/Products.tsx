import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    shadowRadius: 3,
    paddingTop: 0,
  },
  img: {
    height: 180,
    width: 130,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  card: {
    borderWidth: 0.7,
    margin: 5,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'black',
    marginLeft: 5
  },
  list: {
    marginTop: 20,
    marginLeft: 5,
    margin: '40%',
    marginBottom: 20
  },
  checkboxView: {
    position:'absolute',
    bottom:10,
    right:10
  },
  checkbox: {
    margin: 8,
  },
})

export default styles;