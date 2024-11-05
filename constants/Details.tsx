import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    marginTop: '0%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '90%',
    margin: 20,
  },
  detailImage: {
    marginTop: 10,
    height: 250,
    width: '100%',
    borderRadius: 4,
  },
  titleView: {
    marginTop: '25%',
    margin: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: '600',
    margin: 10,
    color: 'black',
    marginBottom: 0
  },
  detailText: {
    fontSize: 18,
    marginVertical: 5,
    paddingLeft: 20,
    marginBottom: 10
  },
  detailPrice: {
    fontSize: 18,
    marginVertical: 5,
    color: 'gray',
    margin: 10
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '80%'
  },
  textContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30
  }
});

export default styles;