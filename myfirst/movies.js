import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import screeen1 from "./screen1";
// import styles from './projects/insata2CSS';

class homes extends React.Component {
  state = {
    myapp: [
      {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot:
          "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Metascore: "83",
        imdbRating: "7.9",
        imdbVotes: "890,617",
        imdbID: "tt0499549",
        Type: "movie",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
      },
      {
        Title: "I Am Legend",
        Year: "2007",
        Rated: "PG-13",
        Released: "14 Dec 2007",
        Runtime: "101 min",
        Genre: "Drama, Horror, Sci-Fi",
        Director: "Francis Lawrence",
        Writer:
          "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
        Actors:
          "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
        Plot:
          "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        Language: "English",
        Country: "USA",
        Awards: "9 wins & 21 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
        Metascore: "65",
        imdbRating: "7.2",
        imdbVotes: "533,874",
        imdbID: "tt0480249",
        Type: "movie",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
        ]
      },
      {
        Title: "300",
        Year: "2006",
        Rated: "R",
        Released: "09 Mar 2007",
        Runtime: "117 min",
        Genre: "Action, Drama, Fantasy",
        Director: "Zack Snyder",
        Writer:
          "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
        Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
        Plot:
          "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
        Language: "English",
        Country: "USA",
        Awards: "16 wins & 42 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
        Metascore: "52",
        imdbRating: "7.7",
        imdbVotes: "611,046",
        imdbID: "tt0416449",
        Type: "movie",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
        ]
      },
      {
        Title: "The Avengers",
        Year: "2012",
        Rated: "PG-13",
        Released: "04 May 2012",
        Runtime: "143 min",
        Genre: "Action, Sci-Fi, Thriller",
        Director: "Joss Whedon",
        Writer:
          "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
        Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        Plot:
          "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        Language: "English, Russian",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
        Metascore: "69",
        imdbRating: "8.1",
        imdbVotes: "1,003,301",
        imdbID: "tt0848228",
        Type: "movie",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        ]
      },
      {
        Title: "The Wolf of Wall Street",
        Year: "2013",
        Rated: "R",
        Released: "25 Dec 2013",
        Runtime: "180 min",
        Genre: "Biography, Comedy, Crime",
        Director: "Martin Scorsese",
        Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
        Actors:
          "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        Plot:
          "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        Language: "English, French",
        Country: "USA",
        Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        Metascore: "75",
        imdbRating: "8.2",
        imdbVotes: "786,985",
        imdbID: "tt0993846",
        Type: "movie",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
        ]
      },
      {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors:
          "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.6",
        imdbVotes: "937,412",
        imdbID: "tt0816692",
        Type: "movie",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
      },
      {
        Title: "Game of Thrones",
        Year: "2011–",
        Rated: "TV-MA",
        Released: "17 Apr 2011",
        Runtime: "56 min",
        Genre: "Adventure, Drama, Fantasy",
        Director: "N/A",
        Writer: "David Benioff, D.B. Weiss",
        Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
        Plot:
          "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
        Metascore: "N/A",
        imdbRating: "9.5",
        imdbVotes: "1,046,830",
        imdbID: "tt0944947",
        Type: "series",
        totalSeasons: "7",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        ]
      },
      {
        Title: "Vikings",
        Year: "2013–",
        Rated: "TV-14",
        Released: "03 Mar 2013",
        Runtime: "44 min",
        Genre: "Action, Drama, History",
        Director: "N/A",
        Writer: "Michael Hirst",
        Actors:
          "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
        Plot:
          "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
        Language: "English, Old English, Norse, Old, Latin",
        Country: "Ireland, Canada",
        Awards:
          "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
        Poster:
          "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
        Metascore: "N/A",
        imdbRating: "8.6",
        imdbVotes: "198,041",
        imdbID: "tt2306299",
        Type: "series",
        totalSeasons: "5",
        Response: "True",
        Images: [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
        ]
      }
    ]
  };
  studentlist() {
    return this.state.myapp.map(val => {
      return (
        <View key={val} style={styles.container}>
          <View style={styles.movBox}>
            <Image
              style={styles.movImg}
              source={{ uri: val.Images[1] }}
            ></Image>
            <View style={styles.texts}>
              <Text style={styles.movTitle} onPress={()=>this.props.navigation.navigate('movies')} > {val.Title + " "}|</Text>
              <Text style={styles.movName}>{val.Released}</Text>
              {/* <Text style={styles.movName}>{val.Runtime}</Text> */}
            </View>
            <View style={styles.texts}>
              <Text style={styles.movName}>{val.Genre}</Text>
            </View>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.movi}> Movies</Text>
          {this.studentlist()}
        </ScrollView>
      </View>
    );
  }
}

// export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "rgb(48, 48, 47)",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%"
  },
  text1: {
    margin: 10,
    // backgroundColor:'lightgray',
    fontSize: 18,
    alignItems: "center",
    width: 300
  },
  detail: {
    // backgroundColor: "green",
    width: "100%",
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  movi: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red",
    width: 330
    // position:"absolute",
  },
  movImg: {
    width: 270,
    height: 150,
    padding: 10,
    backgroundColor: "gray"
  },
  movBox: {
    width: 270,
    height: 200,
    borderColor: "rgb(64, 64, 55)",
    borderWidth: 2,
    borderStyle: "solid",
    //  padding:10,
    margin: 10,
    backgroundColor: "rgb(71, 71, 69)"
  },
  movTitle: {
    fontSize: 16,
    fontWeight: "800",
    paddingLeft: 10,
    paddingTop: 5,
    color: "white"
  },
  movName: {
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 5,
    color: "lightgray"
    // backgroundColor: "green"
    // width:"50%",
  },
  texts: {
    flexDirection: "row",
    height: 25,
    width: 270
  }
});

const mynavv = createStackNavigator({
  home: homes,
  movies: screeen1
});
const myepp = createAppContainer(mynavv);
export default myepp;
