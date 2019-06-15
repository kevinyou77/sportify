import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { renderFlatListItems } from "../../../utilities"
import CourtsImageList from "./CourtsImageList"
import Slideshow from "../../../components/common/Slideshow"
import {
  text,
  heading,
  textAttribute
} from "../../../styles/common/fontStyles";
import StarRating from "react-native-star-rating"
import CourtsReview from "../courtsReview/CourtsReview"
import { formButtons } from "../../../styles/common/buttonStyles"
import { colors } from "../../../constants/colors"
import CourtsBookModal from "./CourtsBookModal"

export default class CourtsDetail extends Component {
  state = {
    courtImages: [
      {
        url:
          "https://lapanganfutsal.id/wp-content/uploads/2017/08/qs-lapangan-futsal-medan-a.png"
      },
      {
        url:
          "https://apollo-singapore.akamaized.net/v1/files/kz70wxs55xzw2-ID/image;s=966x691;olx-st/_1_.jpg"
      },
      {
        url:
          "http://www.staradmiral.com/wp-content/uploads/2017/01/Empat-Macam-Lapangan-Futsal.jpg"
      }
    ],
    reviews: [
      {
        rating: 4,
        description: "Facilites are well kept and clean",
        username: "arkana99",
        userImage:
          "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
      },
      {
        rating: 4,
        description: "Facilites are well kept and clean",
        username: "noobmaster69",
        userImage:
          "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
      },
      {
        rating: 3,
        description: "Staffs are not friendly, will not recommend",
        username: "creativecloud",
        userImage:
          "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
      }
    ],
    starCount: 0,
    isBookModalVisible: false,
  };

  flatListOptions(item) {
    return {
      Component: CourtsImageList,
      props: {
        image: item
      }
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    })
  }

  handleModalOnClick = () => {
    this.setState((prevState) => ({
      isBookModalVisible: !prevState.isBookModalVisible,
    }))
  }

  onBookButtonPress = () => {
    this.setState((prevState) => ({
      isBookModalVisible: !prevState.isBookModalVisible,
    }))
  }


  render() {
    const { courtImages, reviews, isBookModalVisible } = this.state

    return (
      <View style={[{ flex: 1 }]}>
        <CourtsBookModal
          visible={isBookModalVisible}
          handleOnClose={this.handleModalOnClick}
        />

        <ScrollView style={[styles.courtsDetailWrapper]}>
          <StatusBar barStyle="light-content" translucent />

          <Slideshow dataSource={courtImages} />

          <View style={[styles.headerWrapper]}>
            <Text style={[heading.large, textAttribute.bold]}>
              Champion Futsal
            </Text>
            <Text style={[text.default, { color: colors.grey }]}>
              Sport Center - Soccer, Basketball
            </Text>

            <View style={styles.rightWrapper}>
              <View style={styles.ratingBoxWrapperStyles}>
                <Text style={styles.ratingBoxStyles}>4.9</Text>
              </View>

              <Text style={[text.extraSmall]}>975 reviews</Text>
            </View>
          </View>

          <View style={[styles.reviewBoxWrapper]}>
            <View style={[styles.yourRatingWrapper]}>
              <Text style={[text.big]}>Your rating!</Text>
            </View>

            <View style={[styles.starRatingWrapper]}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={rating => this.onStarRatingPress(rating)}
                fullStarColor={colors.green}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              padding: 10
            }}
          >
            <Text style={[text.default, styles.reviewText, textAttribute.bold]}>
              Leave a review
            </Text>
          </TouchableOpacity>



          {/* <View style={[ styles.aboutThisPlaceWrapper ]}>

        </View> */}

          <CourtsReview reviews={reviews} />
        </ScrollView>
        <TouchableOpacity style={[formButtons.greenButton, styles.bookButton]}
          onPress={this.onBookButtonPress}>
          <Text style={[text.default, { color: colors.white }]}>BOOK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  reviewText: {
    color: colors.green
  },
  headerWrapper: {
    padding: 10
  },
  ratingBox: {
    right: 2,
    top: 0,
    position: "absolute"
  },
  rightWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 2,
    top: 15
  },
  courtsDetailWrapper: {},
  trendingNowWrapperStyles: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    padding: 10
  },
  seeAllStyles: {
    color: "green"
  },
  flatListContainer: {
    width: "100%"
  },
  ratingBoxStyles: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "700"
  },
  ratingBoxWrapperStyles: {
    borderRadius: 20,
    backgroundColor: "#00b900",
    width: 37,
    padding: 2
  },
  reviewBoxWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  yourRatingWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  starRatingWrapper: {
    width: "50%",
    height: 40
  },
  bookButton: {
    position: "absolute",
    bottom: 0
  }
};
