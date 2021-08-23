import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {getFilteredNews} from '../../redux/actions';
import styles from './styles';

const renderItem = ({item}) => {
  return (
    <View key={item.urlToImage} style={styles.container}>
      <Image style={styles.image} source={{uri: item?.urlToImage}} />
      <View style={styles.description}>
        <Text numberOfLines={2} style={{fontSize: 16}}>
          {item.description}
        </Text>
        <Text numberOfLines={3} style={styles.content}>
          {item.content}
        </Text>
        <Text style={styles.date}>
          {new Date(item.publishedAt)
            .toDateString()
            .split(' ')
            .slice(1)
            .join(' ')}
        </Text>
      </View>
    </View>
  );
};

const Search = props => {
  const {getFilteredNews, news} = props;
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getFilteredNews(pageNumber);
  }, [pageNumber]);

  const goToNextPage = () => {
    if (pageNumber * 20 < news.totalResults) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <FlatList
      data={news?.articles}
      renderItem={renderItem}
      onEndReached={goToNextPage}
      onEndReachedThreshold={0.1}
    />
  );
};

const mapStateToProps = state => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilteredNews: pageNumber => dispatch(getFilteredNews(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
