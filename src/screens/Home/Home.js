import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Icon } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.search}>
            <TextInput
              style={styles.searchText}
              placeholder="Search for survey..."
            />
            <TouchableOpacity>
              <Icon name="search" size={25} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.mainSurvey}>
            <TouchableOpacity style={styles.mainSurveyImageContainer}>
              <Image
                style={styles.mainSurveyImage}
                source={{
                  uri:
                    'https://s3-eu-west-1.amazonaws.com/parkit03258/wp-content/uploads/2019/01/28143625/belinda-fewings-675969-unsplash-1024x768.jpg',
                }}
              />
              <Text style={styles.mainSurveyText}>
                wins the heart of listeners and customes
              </Text>
            </TouchableOpacity>
            <View style={styles.mainSurveyInfo}>
              <Image
                style={styles.mainSurveyProviderImage}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png',
                }}
              />
              <View style={styles.mainSurveyProviderDetails}>
                <Text style={styles.mainSurveyProviderName}>
                  Airport Emirates
                </Text>
                <Text style={styles.mainSurveyProviderDescribtion}>
                  Artificial writer at Timesnow
                </Text>
              </View>
              <TouchableOpacity style={styles.mainSurveyShareIconContainer}>
                <Icon
                  name="share"
                  style={styles.mainSurveyShareIcon}
                  size={15}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.mainSurveyReward}>
              <Image
                style={styles.mainSurveyRewardCurrencyImage}
                source={{
                  uri:
                    'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                }}
              />
              <Text style={styles.mainSurveyRewardAmount}>30</Text>
              <View style={styles.mainSurveyDateContainer}>
                <Text style={styles.mainSurveyDateLabel}>End date</Text>
                <Text style={styles.mainSurveyDate}>28-09-2019</Text>
                <Icon
                  name="calendar"
                  size={15}
                  style={styles.mainSurveyCalendarIcon}
                />
              </View>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.mainCategories}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryName}>Entertainment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryName}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryName}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryName}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryName}>Clothes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryName}>Travel</Text>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.featuredNewsLabel}>Featured News (6)</Text>
          <ScrollView
            horizontal={true}
            style={styles.featuredNews}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.news}>
              <Image
                source={{
                  uri:
                    'https://thumbs.dreamstime.com/z/mcdonald-bangkok-thailand-april-has-been-opened-hours-day-91671860.jpg',
                }}
                style={styles.newsImage}
              />
              <View style={styles.newsProviderAndRewardContainer}>
                <Text style={styles.newsProviderName}>McDonalds</Text>
                <View style={styles.rewardContainer}>
                  <Image
                    style={styles.newsRewardCurrencyImage}
                    source={{
                      uri:
                        'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                    }}
                  />
                  <Text style={styles.newsRewardAmount}>30</Text>
                </View>
              </View>
              <Text style={styles.newsName}>Quality products</Text>
              <View style={styles.newsTimeContainer}>
                <View style={styles.newsTime}>
                  <Icon name="time" size={8} style={styles.newsTimeIcon} />
                  <Text style={styles.newsRewardTime}>01:30 Min</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.news}>
              <Image
                source={{
                  uri: 'http://inspirebharat.com/uploads/2017/06/kfc2.jpg',
                }}
                style={styles.newsImage}
              />
              <View style={styles.newsProviderAndRewardContainer}>
                <Text style={styles.newsProviderName}>KFC</Text>
                <View style={styles.rewardContainer}>
                  <Image
                    style={styles.newsRewardCurrencyImage}
                    source={{
                      uri:
                        'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                    }}
                  />
                  <Text style={styles.newsRewardAmount}>50</Text>
                </View>
              </View>
              <Text style={styles.newsName}>New product</Text>
              <View style={styles.newsTimeContainer}>
                <View style={styles.newsTime}>
                  <Icon name="time" size={8} style={styles.newsTimeIcon} />
                  <Text style={styles.newsRewardTime}>02:00 Min</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.news}>
              <Image
                source={{
                  uri:
                    'https://216348-656719-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/47347328_2200681909966803_4632468433164828672_n-compressor.jpg',
                }}
                style={styles.newsImage}
              />
              <View style={styles.newsProviderAndRewardContainer}>
                <Text style={styles.newsProviderName}>Cook Door</Text>
                <View style={styles.rewardContainer}>
                  <Image
                    style={styles.newsRewardCurrencyImage}
                    source={{
                      uri:
                        'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                    }}
                  />
                  <Text style={styles.newsRewardAmount}>100</Text>
                </View>
              </View>
              <Text style={styles.newsName}>Brand New Offer</Text>
              <View style={styles.newsTimeContainer}>
                <View style={styles.newsTime}>
                  <Icon name="time" size={8} style={styles.newsTimeIcon} />
                  <Text style={styles.newsRewardTime}>01:00 Min</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.news}>
              <Image
                source={{
                  uri:
                    'https://vignette.wikia.nocookie.net/admascots/images/b/b6/Fido7UpLogo.jpg/revision/latest?cb=20151231103421',
                }}
                style={styles.newsImage}
              />
              <View style={styles.newsProviderAndRewardContainer}>
                <Text style={styles.newsProviderName}>7up</Text>
                <View style={styles.rewardContainer}>
                  <Image
                    style={styles.newsRewardCurrencyImage}
                    source={{
                      uri:
                        'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                    }}
                  />
                  <Text style={styles.newsRewardAmount}>20</Text>
                </View>
              </View>
              <Text style={styles.newsName}>Enjoy 7up</Text>
              <View style={styles.newsTimeContainer}>
                <View style={styles.newsTime}>
                  <Icon name="time" size={8} style={styles.newsTimeIcon} />
                  <Text style={styles.newsRewardTime}>02:30 Min</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.news}>
              <Image
                source={{
                  uri:
                    'https://store-images.s-microsoft.com/image/apps.57127.13510798883004311.f93f35d5-77df-481f-bcf0-7276c90883c3.4414a30a-0efe-4ef6-8283-0d81828287da',
                }}
                style={styles.newsImage}
              />
              <View style={styles.newsProviderAndRewardContainer}>
                <Text style={styles.newsProviderName}>Dunkin Donuts</Text>
                <View style={styles.rewardContainer}>
                  <Image
                    style={styles.newsRewardCurrencyImage}
                    source={{
                      uri:
                        'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                    }}
                  />
                  <Text style={styles.newsRewardAmount}>70</Text>
                </View>
              </View>
              <Text style={styles.newsName}>
                Try the strawberry special now
              </Text>
              <View style={styles.newsTimeContainer}>
                <View style={styles.newsTime}>
                  <Icon name="time" size={8} style={styles.newsTimeIcon} />
                  <Text style={styles.newsRewardTime}>01:30 Min</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.mostPopularLabelContainer}>
            <Text style={styles.mostPopularLabel}>MOST POPULAR</Text>
            <TouchableOpacity style={styles.viewAll}>
              <Text style={styles.viewAllLabel}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mostPopular}>
            <View style={styles.mostPopularItem}>
              <Image
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/922565311248912390/kziFl8x4.jpg',
                }}
                style={styles.mostPopularItemImage}
              />
              <View style={styles.mostPopularItemDataAndButtonContainer}>
                <View style={styles.mostPopularItemData}>
                  <Text style={styles.mostPopularItemBrandName}>Vodafone</Text>
                  <Text style={styles.mostPopularItemSurveyName}>
                    Flex Offer
                  </Text>
                  <View style={styles.mostPopularTimeAndReward}>
                    <Icon name="time" style={styles.mostPopularItemTimeIcon} />
                    <Text style={styles.mostPopularItemTimeLabel}>
                      01:30 Min |
                    </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostPopularItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostPopularItemCurrencyLabel}>10</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.mostPopularItemButton}>
                  <Text style={styles.mostPopularItemButtonText}>Go</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mostPopularItem}>
              <Image
                source={{
                  uri:
                    'https://216348-656719-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/47347328_2200681909966803_4632468433164828672_n-compressor.jpg',
                }}
                style={styles.mostPopularItemImage}
              />
              <View style={styles.mostPopularItemDataAndButtonContainer}>
                <View style={styles.mostPopularItemData}>
                  <Text style={styles.mostPopularItemBrandName}>Cook Door</Text>
                  <Text style={styles.mostPopularItemSurveyName}>
                    Flex Offer
                  </Text>
                  <View style={styles.mostPopularTimeAndReward}>
                    <Icon name="time" style={styles.mostPopularItemTimeIcon} />
                    <Text style={styles.mostPopularItemTimeLabel}>
                      01:30 Min |
                    </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostPopularItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostPopularItemCurrencyLabel}>10</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.mostPopularItemButton}>
                  <Text style={styles.mostPopularItemButtonText}>Go</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mostPopularItem}>
              <Image
                source={{
                  uri:
                    'http://inspirebharat.com/uploads/2017/06/kfc2.jpg',
                }}
                style={styles.mostPopularItemImage}
              />
              <View style={styles.mostPopularItemDataAndButtonContainer}>
                <View style={styles.mostPopularItemData}>
                  <Text style={styles.mostPopularItemBrandName}>KFC</Text>
                  <Text style={styles.mostPopularItemSurveyName}>
                    Flex Offer
                  </Text>
                  <View style={styles.mostPopularTimeAndReward}>
                    <Icon name="time" style={styles.mostPopularItemTimeIcon} />
                    <Text style={styles.mostPopularItemTimeLabel}>
                      01:30 Min |
                    </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostPopularItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostPopularItemCurrencyLabel}>10</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.mostPopularItemButton}>
                  <Text style={styles.mostPopularItemButtonText}>Go</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mostPopularLabelContainer}>
            <Text style={styles.mostPopularLabel}>MOST VIEWED</Text>
            <TouchableOpacity style={styles.viewAll}>
              <Text style={styles.viewAllLabel}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mostViewed}>
            <View style={styles.mostViewedItem}>
              <Image
                source={{
                  uri:
                    'https://vignette.wikia.nocookie.net/admascots/images/b/b6/Fido7UpLogo.jpg/revision/latest?cb=2015123110342',
                }}
                style={styles.mostViewedItemImage}
              />
              <View style={styles.mostViewedItemDataContainer}>
                <View style={styles.mostViewedItemInfo}>
                  <Text style={styles.mostViewedItemBrandName}>7up</Text>
                  <Text style={styles.mostViewedItemOfferTitle}>
                    Flex offer
                  </Text>
                  <View style={styles.mostViewedItemTimeAndRewardContainer}>
                    <Icon name="time" style={styles.mostViewedItemTimeIcon} />
                    <Text style={styles.mostViewedItemTime}>01:30 Mins | </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostViewedItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostViewedItemRewardCurrency}>30</Text>
                  </View>
                </View>
                <View style={styles.mostViewedItemProvider}>
                  <Image
                    source={{
                      uri:
                        'https://d3ui957tjb5bqd.cloudfront.net/uploads/2014/12/7Up-Logo-7.jpg',
                    }}
                    style={styles.mostViewedItemProviderImage}
                  />
                  <View style={styles.mostViewedItemProviderData}>
                    <Text style={styles.mostViewedItemProviderName}>
                      7up
                    </Text>
                    <Text style={styles.mostViewedItemProvierDescribtion}>
                      Artificial writer at Timesnow
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.mostViewedItem}>
              <Image
                source={{
                  uri:
                    'https://s3.amazonaws.com/cms.ipressroom.com/285/files/20164/574706a62cfac25e7e6cadae_National+Donut+Day/National+Donut+Day_ba8efe2f-e697-4aca-a0ef-f68b3230cac9-prv.jpg',
                }}
                style={styles.mostViewedItemImage}
              />
              <View style={styles.mostViewedItemDataContainer}>
                <View style={styles.mostViewedItemInfo}>
                  <Text style={styles.mostViewedItemBrandName}>Dunkin Donuts</Text>
                  <Text style={styles.mostViewedItemOfferTitle}>
                    New Flavor
                  </Text>
                  <View style={styles.mostViewedItemTimeAndRewardContainer}>
                    <Icon name="time" style={styles.mostViewedItemTimeIcon} />
                    <Text style={styles.mostViewedItemTime}>02:00 Mins | </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostViewedItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostViewedItemRewardCurrency}>70</Text>
                  </View>
                </View>
                <View style={styles.mostViewedItemProvider}>
                  <Image
                    source={{
                      uri:
                        'https://store-images.s-microsoft.com/image/apps.57127.13510798883004311.f93f35d5-77df-481f-bcf0-7276c90883c3.4414a30a-0efe-4ef6-8283-0d81828287da',
                    }}
                    style={styles.mostViewedItemProviderImage}
                  />
                  <View style={styles.mostViewedItemProviderData}>
                    <Text style={styles.mostViewedItemProviderName}>
                      Dunkin Donuts
                    </Text>
                    <Text style={styles.mostViewedItemProvierDescribtion}>
                      Artificial writer at Timesnow
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.mostViewedItem}>
              <Image
                source={{
                  uri:
                    'https://drinkedin.net/images/easyblog_articles/10708/ST_PizzaCover_061416_16001.jpg',
                }}
                style={styles.mostViewedItemImage}
              />
              <View style={styles.mostViewedItemDataContainer}>
                <View style={styles.mostViewedItemInfo}>
                  <Text style={styles.mostViewedItemBrandName}>Pizza Hut</Text>
                  <Text style={styles.mostViewedItemOfferTitle}>
                    Stuffed Crust Mozzarilla
                  </Text>
                  <View style={styles.mostViewedItemTimeAndRewardContainer}>
                    <Icon name="time" style={styles.mostViewedItemTimeIcon} />
                    <Text style={styles.mostViewedItemTime}>01:30 Mins | </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostViewedItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostViewedItemRewardCurrency}>30</Text>
                  </View>
                </View>
                <View style={styles.mostViewedItemProvider}>
                  <Image
                    source={{
                      uri:
                        'http://www.logosvectorfree.com/wp-content/uploads/2018/07/Pizza-Hut-Logo-Vectors.jpg',
                    }}
                    style={styles.mostViewedItemProviderImage}
                  />
                  <View style={styles.mostViewedItemProviderData}>
                    <Text style={styles.mostViewedItemProviderName}>
                      Pizza Hut
                    </Text>
                    <Text style={styles.mostViewedItemProvierDescribtion}>
                      Artificial writer at Timesnow
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.mostViewedItem}>
              <Image
                source={{
                  uri:
                    'https://wallpaperstream.com/wallpapers/full/ice-cream/Fruits-and-Ice-Cream-HD-Wallpaper.jpg',
                }}
                style={styles.mostViewedItemImage}
              />
              <View style={styles.mostViewedItemDataContainer}>
                <View style={styles.mostViewedItemInfo}>
                  <Text style={styles.mostViewedItemBrandName}>Ice cream company</Text>
                  <Text style={styles.mostViewedItemOfferTitle}>
                    Summer Lemonade flavor
                  </Text>
                  <View style={styles.mostViewedItemTimeAndRewardContainer}>
                    <Icon name="time" style={styles.mostViewedItemTimeIcon} />
                    <Text style={styles.mostViewedItemTime}>01:30 Mins | </Text>
                    <Image
                      source={{
                        uri:
                          'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69726090_365058184429285_3400103786067263488_n.jpg?_nc_cat=111&_nc_oc=AQn518X0tGouBL5BMJOXVywK2Mcz1G_pR6mZ4sSKJ8wdZa3rhNFZxS6KK8rPG_WxaPg&_nc_ht=scontent-hbe1-1.xx&oh=bd623f5df33964d9b29e505b7c0197c5&oe=5DFB82C4',
                      }}
                      style={styles.mostViewedItemRewardCurrencyImage}
                    />
                    <Text style={styles.mostViewedItemRewardCurrency}>30</Text>
                  </View>
                </View>
                <View style={styles.mostViewedItemProvider}>
                  <Image
                    source={{
                      uri:
                        'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2465608/580/386/m1/fpnw/wm0/01-.jpg?1490694311&s=ee31bb1bd91a8c668be6f4dd62110a6f',
                    }}
                    style={styles.mostViewedItemProviderImage}
                  />
                  <View style={styles.mostViewedItemProviderData}>
                    <Text style={styles.mostViewedItemProviderName}>
                      Ice Cream Company
                    </Text>
                    <Text style={styles.mostViewedItemProvierDescribtion}>
                      Artificial writer at Timesnow
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
let width = Dimensions.get('window').width;

let styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: width * 0.1,
  },
  search: {
    height: width * 0.1,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 5,
    marginTop: width * 0.05,
  },
  searchText: {
    width: '70%',
  },
  searchIcon: {
    color: '#aaaaaa',
  },
  mainSurvey: {
    width: width * 0.9,
    height: width * 0.95,
    marginTop: width * 0.05,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: 'center',
  },
  mainSurveyImageContainer: {
    height: width * 0.7,
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  mainSurveyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainSurveyText: {
    width: width * 0.8,
    color: 'white',
    fontSize: width * 0.055,
    marginTop: width * -0.175,
  },
  mainSurveyInfo: {
    width: '90%',
    height: width * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#acabab73',
  },
  mainSurveyProviderImage: {
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.05,
  },
  mainSurveyProviderDetails: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  mainSurveyProviderName: {
    fontWeight: 'bold',
  },
  mainSurveyProviderDescribtion: {
    fontSize: width * 0.03,
    color: '#666666',
  },
  mainSurveyShareIconContainer: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainSurveyReward: {
    width: '90%',
    height: width * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainSurveyRewardCurrencyImage: {
    height: width * 0.06,
    width: width * 0.06,
    borderRadius: width * 0.03,
  },
  mainSurveyRewardAmount: {
    width: width * 0.25,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#227e18',
    textAlign: 'left',
  },
  mainSurveyDateContainer: {
    width: width * 0.45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainSurveyDateLabel: {
    fontSize: width * 0.03,
    color: '#bebebe',
  },
  mainSurveyCalendarIcon: {
    color: '#bebebe',
  },
  category: {
    width: width * 0.3,
    height: width * 0.15,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.03,
  },
  categoryName: {
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  featuredNewsLabel: {
    width: width * 0.9,
    marginTop: width * 0.06,
    textAlign: 'left',
  },
  featuredNews: {
    marginRight: width * 0.05,
  },
  news: {
    height: width * 0.75,
    width: width * 0.9,
    marginTop: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: width * 0.02,
  },
  newsImage: {
    width: '100%',
    height: width * 0.5,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  newsProviderAndRewardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.8,
    marginTop: width * 0.02,
  },
  newsProviderName: {
    fontSize:  width*0.03,
    color: '#666666',
  },
  rewardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.12,
  },
  newsRewardCurrencyImage: {
    height: width * 0.05,
    width: width * 0.05,
    borderRadius: width * 0.025,
  },
  newsRewardAmount: {
    color: '#227e18',
  },
  newsName: {
    fontSize: width * 0.04,
    width: width * 0.8,
    fontWeight : 'bold'
  },
  newsTimeContainer: {
    width: width * 0.8,
  },
  newsTime: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#666666',
  },
  newsTimeIcon: {
    fontSize: width * 0.03,
    color: '#666666',
  },
  newsRewardTime:{
    fontSize: width * 0.03,
    marginLeft : width*0.015
  },
  mostPopularLabelContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    marginTop: width * 0.04,
    justifyContent: 'space-between',
  },
  mostPopularLabel: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  mostPopular: {
    width,
    borderTopWidth: 1,
    borderTopColor: '#acabab73',
    borderBottomColor: '#acabab73',
    marginTop: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mostPopularItem: {
    width: width * 0.9,
    height: width * 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mostPopularItemImage: {
    height: width * 0.15,
    width: width * 0.2,
    borderRadius: 5,
  },
  mostPopularItemDataAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.25,
    width: width * 0.65,
    borderBottomColor: '#acabab73',
    borderBottomWidth: 1,
  },
  mostPopularItemData: {
    width: width * 0.5,
    justifyContent: 'center',
  },
  mostPopularItemBrandName: {
    fontSize: width * 0.03,
    color: '#666666',
  },
  mostPopularTimeAndReward: {
    width: width * 0.35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mostPopularItemTimeIcon: {
    fontSize: width * 0.05,
    color: '#666666',
  },
  mostPopularItemTimeLabel: {
    color: '#666666',
  },
  mostPopularItemRewardCurrencyImage: {
    height: width * 0.02,
    width: width * 0.02,
    borderRadius: width * 0.01,
  },
  mostPopularItemCurrencyLabel: {
    color: '#227e18',
  },
  mostPopularItemButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.12,
    width: width * 0.12,
    backgroundColor: '#5ecccf',
    borderRadius: 5,
  },
  mostPopularItemButtonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  mostViewed: {
    width,
    marginTop: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mostViewedItem: {
    width: width * 0.9,
    flexDirection: 'row',
    marginBottom : width*0.05,
    alignItems : 'center',
  },
  mostViewedItemImage: {
    width: width * 0.45,
    height: width * 0.35,
    borderRadius: 5,
  },
  mostViewedItemDataContainer: {
    width: width * 0.45,
    height: width * 0.3,
    paddingLeft: width * 0.02,
    justifyContent: 'space-between' 
  },
  mostViewedItemBrandName: {
    fontSize: width * 0.03,
    color: '#666666',
  },
  mostViewedItemOfferTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  mostViewedItemTimeAndRewardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.3,
  },
  mostViewedItemTimeIcon: {
    fontSize: width * 0.03,
    color: '#666666',
  },
  mostViewedItemTime: {
    fontSize: width * 0.03,
    color: '#666666', 
  },
  mostViewedItemRewardCurrencyImage: {
    height: width * 0.03,
    width: width * 0.03,
    borderRadius: width * 0.015,
  },
  mostViewedItemRewardCurrency: {
    fontSize: width * 0.03,
    color: '#666666',
  },
  mostViewedItemProvider:{
    flexDirection : 'row',
    width: width*0.4,
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  mostViewedItemProviderImage:{
    height : width*0.1,
    width : width*0.1,
    borderRadius : width*0.05
  },
  mostViewedItemProviderData:{
    width: width*0.25,
  },  
  mostViewedItemProviderName:{
    fontSize : width*0.03,
    fontWeight : 'bold'
  },
  mostViewedItemProvierDescribtion:{
    fontSize : width*0.025,
    color : '#666666'
  }
});