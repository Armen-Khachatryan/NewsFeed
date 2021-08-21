import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {countries} from '../../constants/countries';
import {languages} from '../../constants/languages';
import {getSources, selectSource} from '../../redux/actions';
import styles from './styles';

const NewsSource = ({item, openSource}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        openSource();
      }}
      style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text
        style={styles.description}>
        {item.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        <Text>{item.category}</Text>
        <Text>{languages[item.language]?.name}</Text>
        <Text>{countries[item.country.toUpperCase()]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NewsFeed = props => {
  const {sources, getSources, selectSource, navigation} = props;

  useEffect(() => {
    getSources();
  }, []);

  return (
    <FlatList
      data={sources}
      renderItem={source => (
        <NewsSource
          item={source.item}
          openSource={() => {
            selectSource(source.item);
            navigation.navigate('Search');
          }}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const mapStateToProps = state => {
  return {
    sources: state.sources,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    getSources: () => dispatch(getSources()),
    selectSource: newsSource => dispatch(selectSource(newsSource)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(NewsFeed);
