import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {getFilteredNews, removeNews} from '../../redux/actions';
import styles from './styles';

const NewsItem = ({item}) => {
  return (
    <View style={styles.container}>
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
  const {getFilteredNews, removeNews, news} = props;
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getFilteredNews(pageNumber);
  }, [pageNumber]);

  const loadMoreData = () => {
    if (pageNumber * 20 < news.totalResults) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <FlatList
      data={news?.articles}
      renderItem={article => <NewsItem item={article.item} />}
      keyExtractor={item => item.id}
      onEndReached={loadMoreData}
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
    removeNews: () => dispatch(removeNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
