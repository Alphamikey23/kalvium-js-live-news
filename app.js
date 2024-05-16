// Progression 1: create a function and fetch the api using axios
const api = "939a1128415bcdae11eca9282b41629e"

function newsFetcher() {
    const newsUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${api}`;
    return axios.get(newsUrl)
      .then(function(newsResponse) { 
        console.log(newsResponse.data);
        return newsResponse.data.articles;
      })
      .catch(function(err) {
        console.error('Error fetching news:', err);
      });
  }
  
  function newsDisplay(articlesList) {
    const newsContainer = document.getElementById('layout');
    articlesList.forEach((newsArticle, idx) => {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add('news-article');
      articleDiv.innerHTML = `
        <h3>${idx + 1}. ${newsArticle.title}</h3>
        ${newsArticle.image ? `<img src="${newsArticle.image}" alt="Image">` : 'No image in article'}
        <p>${newsArticle.description}</p> 
      `;
      newsContainer.appendChild(articleDiv);
    });
  }
  
  newsFetcher()
    .then(function(newsArticles) {
      newsDisplay(newsArticles);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  